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
var RTX_1 = require('../../../scripts/rtx/RTX');
var Header_1 = require('./components/Header');
;
var AppHeaderWidget = (function (_super) {
    __extends(AppHeaderWidget, _super);
    function AppHeaderWidget() {
        _super.apply(this, arguments);
    }
    AppHeaderWidget.prototype.render = function () {
        var template = (<div>
                <Header_1.Header framework={this.props.compiler} compiler={this.props.framework}/>
            </div>);
        return template;
    };
    AppHeaderWidget = __decorate([
        RTX_1.Widget({
            moduleName: "app-header",
            translator: "app-header"
        })
    ], AppHeaderWidget);
    return AppHeaderWidget;
}(React.Component));
exports.AppHeaderWidget = AppHeaderWidget;
//# sourceMappingURL=AppHeaderWidget.js.map