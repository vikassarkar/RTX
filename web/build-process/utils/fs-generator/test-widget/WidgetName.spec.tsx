/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { WidgetName } from '../../widgets/widget-folder-name/WidgetName';

jest.dontMock('../../widgets/widget-folder-name/WidgetName.tsx');

describe('ComponentName', () => {

    it('ComponentName props should contain TypeScript and React', () => {
        var expectedFramework = 'React';
        var expectedCompiler = 'TypeScript';

        let widgetName = TestUtils.renderIntoDocument(
            <WidgetName framework={expectedFramework} compiler={expectedCompiler} />
        ) as React.Component<WidgetName.IComponentNameProps, any>;

        expect(widgetName.props.framework).toBe(expectedFramework);
        expect(widgetName.props.compiler).toBe(expectedCompiler);
    });
});
