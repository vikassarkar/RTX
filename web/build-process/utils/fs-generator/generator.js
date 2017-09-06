/**
 * Created By Vikas Sarkar
 * Date : 2017-07-09
 */

/**
 * Available commands
 * npm run create -p PageName
 * npm run create -w WidgetName
 * npm run create -c ComponentName 
 */

//define all dependencies
const fsGenerator = require('fs-generator');
const path = require('path');
var prompt = require('prompt');

//get generators configuration
const genConfig = require('../../configs/generator.config.json');

//get orignal params passes in npm run create command
const createConfig = (JSON.parse(process.env.npm_config_argv)).original || null;

var propmtCreate = function (createConfig) {
    prompt.start();
    console.log("\x1b[33m%s\x1b[0m", "Please enter below details as-");
    console.log("\x1b[33m%s\x1b[0m", "Type : widget,  component or page");
    console.log("\x1b[33m%s\x1b[0m", "Name : WidgetName,  ComponentName or PageName");

    prompt.get(['Type', 'Name'], function (err, result) {
        if (err) { return onErr(err); }
        console.log('Name: ' + result.Name);
        console.log('Type: ' + result.Type);
        console.log('Command-line input received:');
        var config = [null, null, result.Type, result.Name];
        generator(config);
    });
}

/**
 * @param createConfig - all data passes in create command
 * generator functionpassing relevent data for folder cretion
 */
var generator = function(createConfig) {
    var folderCreateType = createConfig[2] == "-p" || createConfig[2] == "page" ? "page" : createConfig[2] == "-w" || createConfig[2] == "widget" ? "widget" : createConfig[2] == "-c" || createConfig[2] == "component" ? "component" : null;
    var folderCreateName = createConfig[3];

    if (folderCreateType && folderCreateName) {
        var genData = genConfig[folderCreateType];
        genData.app.input = folderCreateName;
        genData.app.tempFolderPath = path.resolve(__dirname, genData.app.tempFolderPath);
        genData.app.refrenceSourcePath = path.resolve(__dirname, genData.app.refrenceSourcePath);
        genData.app.destinationSourcePath = path.resolve(__dirname, genData.app.destinationSourcePath);

        genData.test.input = folderCreateName;
        genData.test.tempFolderPath = path.resolve(__dirname, genData.test.tempFolderPath);
        genData.test.refrenceSourcePath = path.resolve(__dirname, genData.test.refrenceSourcePath);
        genData.test.destinationSourcePath = path.resolve(__dirname, genData.test.destinationSourcePath);
        
        fsGenerator(genData);
    } else {
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by proper command ~~~~~~");
        console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run create -p PageName~~~~~~");
        console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run create -w WidgetName~~~~~~");
        console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run create -c ComponentName~~~~~~");
    }
}

if (process.argv[2])
    propmtCreate(createConfig);
else
    generator(createConfig);
    