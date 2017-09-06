/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/
"use strict";
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var WidgetName_1 = require('../../widgets/widget-folder-name/WidgetName');
jest.dontMock('../../widgets/widget-folder-name/WidgetName.tsx');
describe('ComponentName', function () {
    it('ComponentName props should contain TypeScript and React', function () {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';
        var widgetName = TestUtils.renderIntoDocument(<WidgetName_1.WidgetName framework={expectedFramework} compiler={expectedCompiler}/>);
        expect(widgetName.props.framework).toBe(expectedFramework);
        expect(widgetName.props.compiler).toBe(expectedCompiler);
    });
});
//# sourceMappingURL=WidgetName.spec.js.map