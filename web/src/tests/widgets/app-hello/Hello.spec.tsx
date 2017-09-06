/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import { Hello } from '../../../modules/widgets/app-hello/components/Hello';
import { IHelloProps } from '../../../modules/widgets/app-hello/models/IHello';

jest.dontMock('../../../modules/widgets/app-hello/components/Hello.tsx');

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