/* eslint-disable consistent-return */
const chalk = require('chalk');
const ServerGenerator = require('generator-jhipster/generators/server');
const { writeFiles } = require('./files');

module.exports = class extends ServerGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        if (!this.jhipsterContext) {
            this.error(
                `This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint collectz-blueprint')}`
            );
        }
    }

    get writing() {
        const phaseFromJHipster = super._writing();
        const myCustomPhase = writeFiles();
        return Object.assign(phaseFromJHipster, myCustomPhase);
    }
};
