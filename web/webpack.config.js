/**
 * Created by: Vikas sarkar
 * date : 2017-07-06
 */

//define all dependencies
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");

//define all configs
var themeConfig;
var webpackConfig = require("./build-process/utils/webpack/webpack.config.utils");
var webpackPathConfig = require("./build-process/configs/webpack.path.config.json");
var themeConfigPath = "./build-process/configs/webpack.theme.config.json";


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
    var srcFolder = webpackPathConfig["default-folder"];
    var buildFolder = webpackPathConfig["default-app"];
    var buildPkg = env || null;
    if (env && env.split("_")[0] == "config")
        buildPkg = null;
    if (env && env.split("_")[0] == "config" && env.split("_")[2])
        srcFolder = env.split("_")[2];
    if (env && env.split("_")[0] == "config" && env.split("_")[3])
        buildFolder = env.split("_")[3];
    var buildEnv = process.argv[1] || null;
    var buildMod = process.env.npm_config_mod || null;

    var isDashboard = buildPkg == 'dashboardApp' || 'dashboardPage' || 'dashboardWidget' || 'dashboardSandbox' ? true : false;
    var buildTheme = env && env.split("_")[0] == "config" ? env && env.split("_")[1] : webpackPathConfig["default-theme"];
    if (buildTheme)
        editThemeConfig(buildTheme);

    //get theme config once updated
    themeConfig = require("./build-process/configs/webpack.theme.config.json");
    editThemeFile();

    //default final app build
    if (!buildPkg && buildEnv) {
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~~~App Build ~~~~~~~~~~~~~~~~~~~~~~~~~~");
        buildConfig = webpackConfig(srcFolder, buildFolder, buildEnv, "", false, false, buildTheme);
    }

        //default for app webserver
    else if (buildPkg == "dashboardApp") {
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~App webserver Build ~~~~~~~~~~~~~~~~~~~~~");
        buildConfig = webpackConfig(srcFolder, buildFolder, buildEnv, "", true, true, buildTheme)
    }
        //setting loop from webpackconfig
    else if (buildPkg && srcFolder == webpackPathConfig["default-folder"]) {
        var configSet = false;
        var defaultsConfig = webpackPathConfig["defaults-" + webpackPathConfig["default-folder"]];
        for (var i in defaultsConfig) {
            if (buildPkg == i) {
                if (buildMod.split("-")[0] == defaultsConfig[i]["prefix"]) {
                    console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~" + buildPkg + " Build ~~~~~~~~~~~~~~~~~");
                    buildConfig = webpackConfig(srcFolder, buildPkg, buildEnv, buildMod, false, false, buildTheme);
                    configSet = true;
                    break;
                }
            }
        }
        if (!configSet) {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run cmd-" + buildPkg + "-build" + buildEnv + " --mod=" + defaultsConfig[buildPkg]["prefix"] + "-name / npm run cmd-" + buildPkg + "-devserver~~~~~~");
        }
    }

    //throw error if buildConfig not defined
    if (buildConfig["entry"])
        return buildConfig;
    else
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~Please provide proper build command~~~~~~")
};
