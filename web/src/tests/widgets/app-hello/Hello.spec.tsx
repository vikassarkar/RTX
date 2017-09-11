/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/
/// <reference path="../../../../node_modules/@types/webpack-env/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import { Hello } from '../../../ui-toolkit/widgets/app-hello/components/Hello';
import { IHelloProps } from '../../../ui-toolkit/widgets/app-hello/models/IHello';

jest.dontMock('../../../ui-toolkit/widgets/app-hello/components/Hello.tsx');

describe('Hello', () => {

    it('props should contain TypeScript and React', () => {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';

        let hello = TestUtils.renderIntoDocument(
            <Hello framework={expectedFramework} compiler={expectedCompiler} />
        ) as React.Component<IHelloProps, any>;

        expect(hello.props.framework).toBe(expectedFramework);
        expect(hello.props.compiler).toBe(expectedCompiler);
    });
});