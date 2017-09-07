/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/
"use strict";
var React = require('react');
var TestUtils = require('react-dom/test-utils');
var Hello_1 = require('../../../ui-toolkit/widgets/app-hello/components/Hello');
jest.dontMock('../../../ui-toolkit/widgets/app-hello/components/Hello.tsx');
describe('Hello', function () {
    it('props should contain TypeScript and React', function () {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';
        var hello = TestUtils.renderIntoDocument(<Hello_1.Hello framework={expectedFramework} compiler={expectedCompiler}/>);
        expect(hello.props.framework).toBe(expectedFramework);
        expect(hello.props.compiler).toBe(expectedCompiler);
    });
});
//# sourceMappingURL=Hello.spec.js.map