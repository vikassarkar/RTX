/**
 * Created by: Vikas sarkar
 * date : 2017-07-15
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var ReactDOM = require('react-dom');
var RTX_1 = require('../../scripts/rtx/RTX');
var AppHelloWidget_1 = require('../widgets/app-hello/AppHelloWidget');
var AppHeaderWidget_1 = require('../widgets/app-header/AppHeaderWidget');
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.componentDidMount = function () {
        document.title = this.translator.TITLE;
    };
    Application.prototype.render = function () {
        var template = (<div>
                <AppHeaderWidget_1.AppHeaderWidget framework="React" compiler="TypeScript compiler"/>
                <div className="container theme-showcase" role="main">
                    <AppHelloWidget_1.AppHelloWidget framework="React" compiler="TypeScript"/>
                </div>
            </div>);
        return template;
    };
    Application = __decorate([
        RTX_1.BaseApp({
            moduleName: "app",
            translator: "app"
        })
    ], Application);
    return Application;
}(React.Component));
ReactDOM.render(<Application />, document.getElementById("root"));
//# sourceMappingURL=index.js.map