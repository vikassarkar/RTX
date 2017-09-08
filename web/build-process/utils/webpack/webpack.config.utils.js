/**
 * Created by: Vikas sarkar
 * date : 2017-07-07
 */

//define all dependencies
const webpack = require('webpack');
const path = require('path');

//define all configs
const htmlConfig = require('../../../build-process/configs/webpack.html.config.json');
const buildPathConfig = require('../../../build-process/configs/webpack.path.config.json');
const currentTheme = require('../../../build-process/configs/webpack.theme.config.json');
const bootstrapEntryPoints = require('./webpack.bootstrap.utils');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

//define all plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//other constatnts
const newport = process.env.port || 8080;
const isProd = process.env.Node_ENV === "production";
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

const webpackConfig = function (srcFolder, packageType, envirnoment, packageName, isDashboard, isTRE, buildTheme) {
    //initilize variables
    var configurations = {};
    console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~getting configuration  " + srcFolder + "/" + packageType + "~~~~~~~~~~~");
    var buildData = buildPathConfig[srcFolder][packageType];
    var theme = buildTheme? buildTheme : currentTheme.theme;
    var entryDir = path.resolve(__dirname, buildData['entryBaseDir'] + packageName + buildData['entryPath'] + buildData['entryFile']);
    var outDir = path.resolve(__dirname, buildData['outBaseDir'] + packageName + buildData['outPath'] + "/" + theme);
    var excludeTheme = theme == "bell" ? /\.virgin.scss$/ : /\.bell.scss$/;
    var includeTheme = theme == "bell" ? /\.bell.scss$/ : /\.virgin.scss$/;
    var excludeThemeDir = path.resolve(__dirname, theme == "bell" ? buildData.virginStylePath : buildData.bellStylePath);
    var includeThemeDir = path.resolve(__dirname, theme == "bell" ? buildData.bellStylePath : buildData.virginStylePath);
    console.log("\x1b[33m%s\x1b[0m", "~~~~~~~~~~~~~~~Building Theme " + theme + "~~~~~~~~~~~~~~~~~~~~~");
    configurations['plugins'] = [
            new CleanWebpackPlugin([outDir], process.cwd()),
            new ExtractTextPlugin({
                filename: buildData['styleFile'],
                disable: false,
                allChunks: true
            }),
            new HtmlPlugin({
                title: htmlConfig[srcFolder][packageType]['title'],
                minify: false,
                template: htmlConfig[srcFolder][packageType]['inFile'],
                filename: htmlConfig[srcFolder][packageType]['outFile']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'react',
                chunks: ['bundle'],
                filename: buildData["vendorPath"] + buildData["ReactFile"],
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'bootstrap',
                chunks: ['bundle'],
                filename: buildData["vendorPath"] + buildData["bootstrapFile"],
                minChunks: Infinity
            })
    ];

    if (isDashboard && isTRE) {
        configurations.plugins.push(new DashboardPlugin({
            port: newport,
            handler: new Dashboard().setData
        }));
    } else if (isDashboard && !isTRE) {
        configurations.plugins.push(new DashboardPlugin({
            port: newport
        }));
    };


    return {
        entry: {
            app: [entryDir],
            react: ["react", "react-dom", "react-router"],
            bootstrap: [bootstrapConfig]
        },
        output: {
            path: outDir,
            publicPath: '',
            filename: buildData['outFile']
        },
        devtool: "source-map",
        resolve: {
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less", ".scss"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: "source-map-loader"
                },
                {
                    test: /\.tsx?$/,
                    use: ["babel-loader?presets[]=es2015", "awesome-typescript-loader"]
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ["style-loader", "css-loader?sourceMap"],
                    })
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            removeComments: true
                        }
                    }]
                },
                {
                    test: /\.scss|.sass$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ["css-loader?sourceMap", "sass-loader?sourceMap"],
                        publicPath: outDir
                    })
                },
                {
                    test: /\.json$/,
                    enforce: "pre",
                    use: ['json-loader']
                },
                {
                    test: /\.(gif|png|jpe?g)$/i,
                    use: ['file-loader?name=[name].[ext]&publicPath=./&outputPath=assets/images/', 'image-webpack-loader']
                },
                {
                    test: /\.(woff2?|svg)$/,
                    use: ['url-loader?limit=10000&name=[name].[ext]&publicPath=./&outputPath=assets/fonts/']
                },
                {
                    test: /\.(ttf|eot)$/,
                    use: ['file-loader?name=[name].[ext]&publicPath=./&outputPath=assets/fonts/']
                },
                {
                    test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                    use: 'imports-loader?jQuery=jquery'
                },
            ]
        },
        devServer: {
            contentBase: outDir,
            compress: true,
            port: newport,
            hot: true,
            historyApiFallback: true,
            inline: true,
            quiet: true,   // important
            open: true,
            openPage: htmlConfig.outFile
        },
        plugins: configurations.plugins
    }
}

module.exports = webpackConfig;