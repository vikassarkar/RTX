/**
 * Created by: Vikas sarkar
 * date : 2017-07-15
 */

//get all config jsons
const webpackTheme:any = require("../../../../build-process/configs/webpack.theme.config.json");
const configData: any = require("../../../configs/config.json");
const themes: any = require("../../../configs/themes.config.json");

//initilize theme parameters
let currentTheme: string = "";
let themeConfigs: Object = {};
let currentLang: string = "";
let annotationsBasePaths: Object = {};
let ajax: string = "";

//on page load call it to get config api
//currently not used
/**
 * method to be call on each page load, calling api for config, and setting it in redux store. 
 */
export const appConfig: any = function () {
    const configData: any = require("../../../configs/config.json");
    //should call api to get appconfig
    //save const theme themeconfig lang
    currentTheme = webpackTheme.theme;
    themeConfigs = currentTheme === "bell" ? themes["bell"] : themes["virgin"];
    currentLang = sessionStorage.getItem("SessionLanguage") ? sessionStorage.getItem("SessionLanguage") : configData.lang;
    annotationsBasePaths = configData.annotationsBasePath;
    ajax = configData.ajax;
    // save it to redux
    //set language in session
    sessionStorage.setItem("SessionLanguage", currentLang);
} ();

/**
 * constant for local configurations
 */
export const localConfigs = {
    //get data from redux
    //theme themeconfig lang
    currentTheme: currentTheme,
    themeConfigs: currentTheme === "bell" ? themes["bell"] : themes["virgin"],
    currentLang: currentLang,
    annotationsBasePaths: annotationsBasePaths,
    ajax: ajax
};

/**
 * load styles required for app/page/widget/component
 * @param type 
 * @param name 
 */
export const requireGlobalStyle = function (annotationType: String, moduleName: String) {
    require("../../../../build-process/configs/webpack.theme.config.scss");
};

