
/**
 * Created by: Vikas sarkar
 * date : 2017-07-21
 */
/// <reference path="../../../../node_modules/@types/webpack-env/index.d.ts" />

import { localConfigs } from "../utils/themes.utils";

export const templateExt = ".html";

export const requireTemplate = function (url: any) {
    console.log("../../../src/" + url)
    var translatorContext = require.context("../../../src/" + url);
    return translatorContext;
}

