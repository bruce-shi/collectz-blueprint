/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityServerGenerator = require('generator-jhipster/generators/entity-server');
const writeFiles = require('./files').writeFiles;
module.exports = class extends EntityServerGenerator {
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
