/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { SideMenu } from './components/SideMenu';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

@Widget({
    moduleName: "app-side-menu", 
    translator: "app-header"
})
export class AppSideMenuWidget extends React.Component<IHelloProps, {}> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<IHelloProps> {
        const template = (
            <div>
                <SideMenu framework={this.props.compiler} compiler={this.props.framework} />
            </div>
        );
        return template;
    }
}