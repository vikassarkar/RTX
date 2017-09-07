
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget } from '../../../../scripts/rtx/RTX';
import {ISideMenuProps} from '../models/ISideMenu'


@Widget({
    moduleName: "app-side-menu",
    translator: "app-header"
})

export class SideMenu extends React.Component<ISideMenuProps, {}> {
    permit: any;
    configs: any;
    translator: any;

    render (): React.ReactElement<ISideMenuProps> {
        
        const template = (
            <h1 className="header">Hello from {this.props.compiler} and {this.props.framework}!!</h1>
        );
        return template;
    }
}