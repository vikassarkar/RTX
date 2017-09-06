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
var ComponentName = (function (_super) {
    __extends(ComponentName, _super);
    function ComponentName() {
        _super.apply(this, arguments);
    }
    ComponentName.prototype.render = function () {
        return (<h1> its ComponentName component build by {this.props.compiler} and {this.props.framework}!!</h1>);
    };
    return ComponentName;
}(React.Component));
exports.ComponentName = ComponentName;
//# sourceMappingURL=ComponentName.js.map