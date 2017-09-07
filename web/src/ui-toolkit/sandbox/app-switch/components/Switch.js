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
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        _super.apply(this, arguments);
    }
    Switch.prototype.render = function () {
        var template = (<p className="btn-switch">
               <input type="radio" id="yes" name="switch" className="btn-switch__radio btn-switch__radio_yes"/>
               <input type="radio" checked id="no" name="switch" className="btn-switch__radio btn-switch__radio_no"/>
               <label htmlFor="yes" className="btn-switch__label btn-switch__label_yes"><span className="btn-switch__txt">Yes</span></label>
               <label htmlFor="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt">No</span></label>
           </p>);
        return template;
    };
    Switch = __decorate([
        RTX_1.Widget({
            moduleName: "app-hello",
            translator: "app"
        })
    ], Switch);
    return Switch;
}(React.Component));
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map