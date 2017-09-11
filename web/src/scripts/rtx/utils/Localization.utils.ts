
/**
 * Created by: Vikas sarkar
 * date : 2017-07-21
 */
/// <reference path="../../../../node_modules/@types/webpack-env/index.d.ts" />

import { localConfigs } from "../utils/themes.utils";

/**
*For test cases not understanding "require.context"
**/
if (typeof require.context === 'undefined') {
    const fs = require('fs');
    const path = require('path');
    require.context = (base, scanSubDirectories = true, regularExpression = /\.json$/) => {
        const files = {};
        function readDirectory(directory: any) {
            fs.readdirSync(directory).forEach((file: any) => {
                const fullPath = path.resolve(directory, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    if (scanSubDirectories) readDirectory(fullPath);
                    return;
                }
                if (!regularExpression.test(fullPath)) return;
                files[fullPath] = true;
            });
        }
        readDirectory(path.resolve(__dirname, base));
        function Module(file) {
            return require(file);
        }
        Module.keys = () => Object.keys(files);
        return Module;
    };
}

export const translatorExt = ".json";

export const requireContext = function (context: any, keyName: String, objName: any) {
  let templates: any = {};
  context.keys().forEach(function (key: any) {
    templates[keyName && objName ? key.replace(keyName, objName) : key] = context(key);
  });

  return templates[objName];
};

export const requireTranslator = function (theme: string) {
  if (theme == "bell")
    var translatorContext = require.context("../../../translator/bell/");
  else
    var translatorContext = require.context("../../../translator/virgin/");
  return translatorContext;
}

/**
 * Translate utility function
 * @param key
 * @param translator
 */
export const requireTranslateMethod = function (key: string, translator: any) {
    if (translator && translator[key])
        return translator[key];
    else
        return key;
}
