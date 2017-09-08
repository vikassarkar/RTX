/**
 * Created by: Vikas sarkar
 * date : 2017-07-06
 */

//define all dependencies
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

//define all configs
var themeConfig;
var webpackConfig = require("./build-process/utils/webpack/webpack.config.utils");
var themeConfigPath = "./build-process/configs/webpack.theme.config.json";
var pathConfigPath = "./build-process/configs/webpack.path.config.json";
var generatorConfigPath = "./build-process/configs/generator.config.json";


var editThemeConfig = function (buildTheme) {
    var updateFileContent = function (oldContent, contentReplaceRegx) {
        var newContent = oldContent.replace(contentReplaceRegx, function (e) {
            return buildTheme;
        });
        return newContent;
    };

    if (fs.existsSync(themeConfigPath)) {
        var contentReplaceRegx = new RegExp("virgin|bell", "g")
        var oldContent = fs.readFileSync(themeConfigPath, 'utf8');
        var newContent = updateFileContent(oldContent, contentReplaceRegx);
        fs.writeFileSync(themeConfigPath, newContent);
    } else {
        console.log("compiling with default BELL THEME")
    }
};

var editThemeFile = function () {

    var updateFileContent = function (oldContent, contentReplaceRegx) {
        var newContent = oldContent.replace(contentReplaceRegx, function (e) {
            return themeConfig.theme;
        });
        return newContent;
    };

    if (fs.existsSync(themeConfig.themeFile)) {
        var contentReplaceRegx = new RegExp("virgin|bell", "g")
        var oldContent = fs.readFileSync(themeConfig.themeFile, 'utf8');
        var newContent = updateFileContent(oldContent, contentReplaceRegx);
        fs.writeFileSync(themeConfig.themeFile, newContent);
    } else {
        console.log("compiling with default BELL THEME")
    }

};

module.exports = function (env) {
    console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~webpack config started~~~~~~~~~~~~~~~~~~~~~");
    var buildConfig = {};
    var srcFolder = "ui-toolkit"; //default set to ui-toolkit
    var buildPkg = env || null;
    if (env && env.split("_")[0] == "theme")
        buildPkg = null;
    if (env && env.split("_")[0] == "theme" && env.split("_")[2])
        srcFolder = env.split("_")[2];
    var buildEnv = process.argv[1] || null;
    var buildMod = process.env.npm_config_mod || null;

    var isDashboard = buildPkg == 'dashboardApp' || 'dashboardPage' || 'dashboardWidget' || 'dashboardSandbox' ? true : false;
    var buildTheme = env && env.split("_")[0] == "theme" ? env && env.split("_")[1] : "bell"; //default theme is set to bell
    if (buildTheme)
        editThemeConfig(buildTheme);

    //get theme config once updated
    themeConfig = require("./build-process/configs/webpack.theme.config.json");
    editThemeFile();
    
    //build for components in sandbox
    //generatorConfigPath[buildPkg] ---make prefix comparision dynamic
    if (buildPkg == "page") {
        if (buildMod.split("-")[0] == "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~Page Build ~~~~~~");
            buildConfig = webpackConfig(srcFolder, buildPkg, buildEnv, buildMod, false, false, buildTheme)
        } else {
            if (buildEnv == '-p') {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-page-build-p --mod=app-name~~~~~~");
            } else {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-page-build-d --mod=app-name~~~~~~");
            }
        }
    }

        //build for Page webserver
    else if (buildPkg == "dashboardPage") {
        if (buildMod.split("-")[0] == "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~Page webserver Build ~~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(srcFolder, "page", buildEnv, buildMod, true, false, buildTheme)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-pagedevserver --mod=app-name-page~~~~~~");
        }
    }

        //build for widget
    else if (buildPkg == "widget") {
        if (buildMod && buildMod.split("-")[0] == "app") { 
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~Widigts Build ~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(srcFolder, buildPkg, buildEnv, buildMod, false, false, buildTheme)
        } else {
            if (buildEnv == '-p') {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-widget-build-p --mod=app-name~~~~~~");
            } else {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-widget-build-d --mod=app-name~~~~~~");
            }
        }
    }

        //build for widget webserver
    else if (buildPkg == "dashboardWidget") {
        if (buildMod && buildMod.split("-")[0] == "app") { 
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~Widget webserver Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(srcFolder, "widget", buildEnv, buildMod, true, false, buildTheme)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-widgetdevserver --mod=app-name~~~~~~");
        }
    }

        //build for components in sandbox
    else if (buildPkg == "sandbox") {
        if (buildMod.split("-")[0] != "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~~Sandbox Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(srcFolder, buildPkg, buildEnv, buildMod, false, false, buildTheme)
        } else {
            if (buildEnv == '-p') {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-sandbox-build-p --mod=app-name~~~~~~");
            } else {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-sandbox-build-d --mod=app-name~~~~~~");
            }
        }
    }

        //build for sandbox components webserver
    else if (buildPkg == "dashboardSandbox") {
        if (buildMod.split("-")[0] == "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~Sandbox webserver Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(srcFolder, "sandbox", buildEnv, buildMod, true, false, buildTheme)
        } else {
            if (buildEnv == '-p') {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-sandboxdevserver --mod=app-name~~~~~~");
            } else {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
                console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-sandboxdevserver --mod=app-name~~~~~~");
            }
        }
    }

        //complete final app build
    else if (!buildPkg && buildEnv) {
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~~~App Build ~~~~~~~~~~~~~~~~~~~~~~~~~~");
        buildConfig = webpackConfig(srcFolder, "app", buildEnv, "", false, false, buildTheme);
    }

        //build for app webserver
    else if (buildPkg == "dashboardApp") {
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~App webserver Build ~~~~~~~~~~~~~~~~~~~~~");
        buildConfig = webpackConfig(srcFolder, "app", buildEnv, "", true, true, buildTheme)
    }

    //throw error if buildConfig not defined
    if (buildConfig["entry"])
        return buildConfig;
    else
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~Please provide proper build command~~~~~~")
};
