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
var RTX_1 = require('../../../../scripts/rtx/RTX');
var SideMenu = (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu() {
        _super.apply(this, arguments);
    }
    SideMenu.prototype.render = function () {
        var template = (<h1 className="header">Hello from {this.props.compiler} and {this.props.framework}!!</h1>);
        return template;
    };
    SideMenu = __decorate([
        RTX_1.Widget({
            moduleName: "app-side-menu",
            translator: "app-header"
        })
    ], SideMenu);
    return SideMenu;
}(React.Component));
exports.SideMenu = SideMenu;
//# sourceMappingURL=SideMenu.js.map