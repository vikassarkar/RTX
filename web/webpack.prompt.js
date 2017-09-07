//define all dependencies
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
var prompt = require('prompt');

//define all configs
var themeConfig = require("./build-process/configs/webpack.theme.config.json");

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

var onErr = function (err) {
    console.log(err);
    return 1;
}

var promptUserWithType = function () {
    prompt.start();
    console.log("\x1b[33m%s\x1b[0m", "Please enter below details as-");
    console.log("\x1b[33m%s\x1b[0m", "PackageType : give package type you want to build - page/widget/sandbox ");
    console.log("\x1b[33m%s\x1b[0m", "Name : give exact package type name eg. for widget- app-header");
    console.log("\x1b[33m%s\x1b[0m", "Envirnoment : -d/-p");

    prompt.get(['PackageType', 'Name', 'Envirnoment'], function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('PackageType: ' + result.PackageType);
        console.log('WidgetName: ' + result.Name);
        console.log('Envirnoment: ' + result.Envirnoment);
        callWebpack(result.PackageType, result.Envirnoment, result.Name);
    });
}

var promptUser = function () {
    prompt.start();
    console.log("\x1b[33m%s\x1b[0m", "Please enter below details as-");
    console.log("\x1b[33m%s\x1b[0m", "Name : give exact package type name eg. for widget- app-header");
    console.log("\x1b[33m%s\x1b[0m", "Envirnoment : -d/-p");

    prompt.get(['Name', 'Envirnoment'], function (err, result) {
        if (err) { return onErr(err); }
        console.log("PackageType: " + process.argv[2])
        console.log('Command-line input received:');
        console.log('WidgetName: ' + result.Name);
        console.log('Envirnoment: ' + result.Envirnoment);
        callWebpack(process.argv[2], result.Envirnoment, result.Name);
    });
}

var callWebpack = function (pkgType, env, name) {
    console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~webpack started with prompt~~~~~~~~~~~~~~~~~~~~~");
    var webpackConfig = require("./build-process/utils/webpack/webpack.config.utils");
    //define params
    var buildPkg = pkgType || null;
    var buildEnv = env || null;
    var buildMod = name || null;
    var buildConfig = {};
    var isDevServer = buildPkg == 'dashboardApp' || buildPkg == 'dashboardPage' || buildPkg == 'dashboardWidget' || buildPkg == 'dashboardSandbox' ? true : false;
    editThemeFile();

    //build for components in sandbox
    if (buildPkg == "page") {
        if (buildMod.split("-")[0] == "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~Page Build ~~~~~~");
            buildConfig = webpackConfig(buildPkg, buildEnv, buildMod, false, false)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-page-build~~~~~~");
        }
    }

        //build for Page webserver
    else if (buildPkg == "dashboardPage") {
        if (buildMod.split("-")[0] == "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~Page webserver Build ~~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig("page", buildEnv, buildMod, true, true)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-page-devserver~~~~~~");
        }
    }

        //build for widget
    else if (buildPkg == "widget") {
        if (buildMod && buildMod.split("-")[0] == "app") { 
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~Widigts Build ~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(buildPkg, buildEnv, buildMod, false, false)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-widget-build~~~~~~");
        }
    }

        //build for widget webserver
    else if (buildPkg == "dashboardWidget") {
        if (buildMod && buildMod.split("-")[0] == "app") { 
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~Widget webserver Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig("widget", buildEnv, buildMod, true, true)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-widget-devserver~~~~~~");
        }
    }

        //build for components in sandbox
    else if (buildPkg == "sandbox") {
        if (buildMod.split("-")[0] != "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~~~~~~~Sandbox Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig(buildPkg, buildEnv, buildMod, false, false)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-sandbox-build~~~~~~");
        }
    }

        //build for sandbox components webserver
    else if (buildPkg == "dashboardSandbox") {
        if (buildMod.split("-")[0] != "app") {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~~~Sandbox webserver Build ~~~~~~~~~~~~~~~~~~~~");
            buildConfig = webpackConfig("sandbox", buildEnv, buildMod, true, true)
        } else {
            console.log("\x1b[33m%s\x1b[0m", "~~~~~~please try running again by command ~~~~~~");
            console.log("\x1b[43m%s\x1b[0m", "~~~~~~npm run prompt-sandbox-devserver ~~~~~~");
        }
    }

    //throw error if buildConfig not defined
    if (buildConfig["entry"]) {
        if (isDevServer) {
            console.log("\x1b[33m%s\x1b[0m", '~~~~~~~~~~WebpackDevServer starting at localhost:' + buildConfig.devServer.port + "~~~~~~~~~~");
            var server = new WebpackDevServer(webpack(buildConfig), buildConfig.devServer);
            server.listen(buildConfig.devServer.port, 'localhost', function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("\x1b[33m%s\x1b[0m", '~~~~~~~~~~WebpackDevServer listening at localhost:' + buildConfig.devServer.port + "~~~~~~~~~~");
            });
        } else {
            webpack(buildConfig, function () {
                console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~webpack build completed~~~~~~~~~~~~~~~~~~~~~~~~~");
            });
        }
    }
    else
        console.log("\x1b[33m%s\x1b[0m", "~~~~~~Please provide proper build command~~~~~~");
};


if (process.argv[2])
    promptUser();
else
    promptUserWithType();