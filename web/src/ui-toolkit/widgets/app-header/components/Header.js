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
var AppButtonComponent_1 = require('../../../sandbox/app-button/AppButtonComponent');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.call(this);
        this.state = {
            logo_image: ""
        };
    }
    Header.prototype.handleBtnsEvent = function (name, data) {
        switch (name) {
            case "l":
                alert(data);
                break;
            case "b":
                alert(data);
                break;
            default:
                alert("No buttons matched");
        }
    };
    Header.prototype.componentWillMount = function () {
        console.log(this.permit);
        console.log(this.translator);
        console.log(this.configs);
        console.log(this.configs.themeConfigs.images + this.configs.currentTheme + '.png');
        this.setState({
            logo_image: require('../../../../' + this.configs.themeConfigs.images + this.configs.currentTheme + '.png')
        });
    };
    Header.prototype.render = function () {
        var template = (<div className="cointainer-fluid usage-header-widget">
                <div className="container">
                    <div className="row header_row">
                        <div className="col-xs-4">
                            <div className="header_image">
                                <img src={this.state.logo_image}/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header_title">
                                <h2>Header Title</h2>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header_btns">
                                <div className="btns_seperator">
                                    <AppButtonComponent_1.AppButtonComponent theme="dark" text="Back" customTheme="" eventClick={this.handleBtnsEvent.bind(this, "b", "Go back")}/>
                                </div>
                                <div>
                                    <AppButtonComponent_1.AppButtonComponent theme="dark" text="Logout" customTheme="" eventClick={this.handleBtnsEvent.bind(this, "l", "Log out")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        return template;
    };
    Header = __decorate([
        RTX_1.Widget({
            moduleName: "app-header",
            translator: "app-header"
        })
    ], Header);
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=Header.js.map