/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/
"use strict";
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var ComponentName_1 = require('../../widgets/widget-folder-name/components/ComponentName');
jest.dontMock('../../widgets/widget-folder-name/components/ComponentName.tsx');
describe('ComponentName', function () {
    it('ComponentName props should contain TypeScript and React', function () {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';
        var componentName = TestUtils.renderIntoDocument(<ComponentName_1.ComponentName framework={expectedFramework} compiler={expectedCompiler}/>);
        expect(componentName.props.framework).toBe(expectedFramework);
        expect(componentName.props.compiler).toBe(expectedCompiler);
    });
});
//# sourceMappingURL=ComponentName.spec.js.map