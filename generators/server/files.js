const constants = require('generator-jhipster/generators/generator-constants');
const SERVER_MAIN_SRC_CUSTOM_DIR = `${constants.MAIN_DIR}java/`;

const INTERPOLATE_REGEX = constants.INTERPOLATE_REGEX;
const SERVER_MAIN_RES_DIR = constants.SERVER_MAIN_RES_DIR;

const customFiles = {
    db: [
        {
            condition: generator => generator.databaseType === 'sql',
            path: SERVER_MAIN_RES_DIR,
            templates: [
                {
                    file: 'config/liquibase/changelog/initial_schema.xml',
                    renameTo: () => 'config/liquibase/changelog/00000000000000_initial_schema.xml',
                    options: { interpolate: INTERPOLATE_REGEX }
                }
            ]
        }
    ]
};

module.exports = {
    writeFiles
};

function writeFiles() {
    return {
        writeServerFile() {
            if (this.skipServer) return;
            console.log('Overriding new entity picked up from template in ' + SERVER_MAIN_SRC_CUSTOM_DIR);

            // write server side files
            this.writeFilesToDisk(customFiles, this, false);
        }
    };
}
