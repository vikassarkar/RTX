/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { ComponentName } from '../../widgets/widget-folder-name/components/ComponentName';
import * as ComponentName  from '../../widgets/widget-folder-name/models/IComponentName';

jest.dontMock('../../widgets/widget-folder-name/components/ComponentName.tsx');

describe('ComponentName', () => {

    it('ComponentName props should contain TypeScript and React', () => {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';

        let componentName = TestUtils.renderIntoDocument(
            <ComponentName framework={expectedFramework} compiler={expectedCompiler} />
        ) as React.Component<ComponentName.IComponentNameProps, any>;

        expect(componentName.props.framework).toBe(expectedFramework);
        expect(componentName.props.compiler).toBe(expectedCompiler);
    });
});
