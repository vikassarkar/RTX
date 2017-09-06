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
var React = require('react');
var ComponentName_1 = require('./components/ComponentName');
require('./styles/main.scss');
var WidgetName = (function (_super) {
    __extends(WidgetName, _super);
    function WidgetName() {
        _super.apply(this, arguments);
    }
    WidgetName.prototype.render = function () {
        return (<div>
                <ComponentName_1.ComponentName framework="React" compiler="TypeScript"/>
            </div>);
    };
    return WidgetName;
}(React.Component));
exports.WidgetName = WidgetName;
//# sourceMappingURL=WidgetName.js.map