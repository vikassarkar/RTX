/**
*Created by Vikas Sarkar
*Date : 2017-07-07
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
var RTX_1 = require('../../../../scripts/rtx/RTX');
var AppButtonComponent_1 = require('../AppButtonComponent');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.handleIndexBack = function (data) {
        alert("hi " + data);
    };
    App.prototype.componentDidMount = function () {
        document.title = this.translator.TITLE;
    };
    App.prototype.render = function () {
        var template = (<div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppButtonComponent".
                    </h2>
                    <div className="col-xs-12 text-center">
                        while you use ".bind" in eventclick it is necessary to pass "this" as first argument.
                    </div>
                    <div className="col-xs-12 text-center">
                        Available themes are "dark / light /transparent".
                    </div>
                    <div className="col-xs-12 text-center">
                        customTheme is name of class if you want to add different theme.
                    </div>

                    <AppButtonComponent_1.AppButtonComponent theme="transparent" text="Index Back" customTheme="" eventClick={this.handleIndexBack.bind(this, "vikas")}/>
                </div>
            </div>);
        return template;
    };
    App = __decorate([
        RTX_1.Widget({
            moduleName: "app-button",
            translator: "app"
        })
    ], App);
    return App;
}(React.Component));
ReactDOM.render(<App />, document.getElementById("root"));
//# sourceMappingURL=index.js.map