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
var ReactDOM = require('react-dom');
var WidgetName_1 = require('../WidgetName');
require('../../../assets/styles/global.scss');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (<div>
                <WidgetName_1.WidgetName />
            </div>);
    };
    return App;
}(React.Component));
ReactDOM.render(<App />, document.getElementById("root"));
//# sourceMappingURL=index.js.map