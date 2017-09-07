
/**
 * Created by: Vikas sarkar
 * date : 2017-07-15
 */

//import all dependencies
import { localConfigs, requireGlobalStyle } from "../utils/Themes.utils";
import { requireContext, requireTranslator, translatorExt, requireTranslateMethod } from "../utils/Localization.utils";
import { requireTemplate, templateExt } from "../utils/Template.utils";

//load all required jsons
const api: any = require("../../../configs/api.config.json");
const fixture: any = require("../../../configs/fixture.config.json");

/**
 * Translate utility function
 * @param key
 * @param translator
 */
export function Translate(key: string, translator: any): string {
    return requireTranslateMethod(key, translator);
};

/**
 * @App Class decoretor - should be used in base application and its child-component class
 * @param info 
 */
export function BaseApp(info: Object): ClassDecorator {
    return <TFunction extends Function>(target: TFunction): TFunction => {

        return ClassDecorator(target, "baseapp", info);
    }
};

/**
 * @Page Class decorator - should be used in Page and its child-component class
 * @param info 
 */
export function Page(info: Object): ClassDecorator {
    return <TFunction extends Function>(target: TFunction): TFunction => {

        return ClassDecorator(target, "pages", info);
    }
};

/**
 * @Widget class decorator - should be used in widget and its child-component class
 * @param info 
 */
export function Widget(info: Object): ClassDecorator {
    return <TFunction extends Function>(target: TFunction): TFunction => {

        return ClassDecorator(target, "widgets", info);
    }
};

/**
 * @Component Class decorator - should be used in sandbox component class
 * @param info 
 */
export function Component(info: Object): ClassDecorator {
    return <TFunction extends Function>(target: TFunction): TFunction => {

        return ClassDecorator(target, "sandbox", info);
    }
};

/**
 * @Config annotation to get configs - can be used in any calss
 * @param constructor 
 */
export function Config<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        //get data from redux data bus
        configs: any = {
            theme: localConfigs.currentTheme,
            themeConfig: localConfigs.themeConfigs,
            lang: localConfigs.currentLang
        }
    }
};

/**
 * Class decorator function to add new properties to constructur class
 * @param target 
 * @param name 
 * @param value 
 */
function ClassDecorator<TFunction extends Function>(target: TFunction, annotationType: string, annotationObj: Object): TFunction {
    // save a reference to the original constructor
    var baseClass = target;

    // a utility function to generate instances of a class
    function construct(constructor: TFunction, args: any) {
        var classInstance: any = function () {
            return constructor.apply(this, args);
        }
        classInstance.prototype = constructor.prototype;
        return new classInstance();
    }

    // the new constructor behaviour
    var newConstructor: any = function (...args: any[]) {
        return construct(baseClass, args);
    }

    // copy prototype so intanceof operator still works
    newConstructor.prototype = baseClass.prototype;
    newConstructor = addProps(newConstructor, annotationType, annotationObj);
    // return new constructor (will override original)
    return newConstructor;

};

/**
 * get required localization data 
 * @param templateName 
 */
function getTranslator(translatorName: any): any {
    let translatorContext = requireTranslator(localConfigs.currentTheme);
    let translator = requireContext(translatorContext, "./" + translatorName + translatorExt, "translator");
    return translator;
};

/**
 * get required template data 
 * @param templateName 
 */
function getTemplate(templateName: any, moduleType:any, moduleName:any): any {
    let translator: any;
    if (moduleType != "baseapp") //add different condition for base app :TODO
        translator = requireTemplate(moduleType + "/"+moduleName+ "/views/" + templateName+ templateExt);
    return translator;
};

/**
 * method to add properties accordingly passed in it
 * @param newConstructor 
 * @param annotationType 
 * @param annotationObj 
 */
function addProps(newConstructor: any, annotationType: String, annotationObj: any): any {
    let constructorInstance: any = newConstructor;
    let moduleName: String = "";
    //if(n=="page") get config api > set local store / get locally saved config
    //set config
    constructorInstance.prototype["configs"] = {
        currentTheme: localConfigs.currentTheme,
        themeConfigs: localConfigs.themeConfigs,
        currentLang: localConfigs.currentLang
    }
    //if(n=="page") get permissions api > set local store / get locally saved permissions 
    //set permissions
    constructorInstance.prototype["permit"] = {}
    for (var i in annotationObj) {
        if (i == "moduleName")
            moduleName = annotationObj[i];
    }
    for (var i in annotationObj) {
        if (i == "translator") {
            let contentFile = getTranslator(annotationObj[i]);
            constructorInstance.prototype["translator"] = contentFile[localConfigs.currentLang];
        }
        else if (i == "style") {
            requireGlobalStyle(annotationType, annotationObj[i]);
        }
        else if (i == "template") {
            //if (moduleName) {
            //    let contentTemplate = getTemplate(annotationObj[i], annotationType, moduleName);
            //    constructorInstance.prototype["template"] = contentTemplate;
            //} else {
            //    constructorInstance.prototype["template"] = annotationObj[i];
            //}
            constructorInstance.prototype["template"] = annotationObj[i]
        }
        else if (i == "api") {
            constructorInstance.prototype["api"] = localConfigs.ajax == "api" ? api[annotationObj[i]] : fixture[annotationObj[i]];
        }
        else {
            constructorInstance.prototype[i] = annotationObj[i];
        }
    }
    return constructorInstance;
};
