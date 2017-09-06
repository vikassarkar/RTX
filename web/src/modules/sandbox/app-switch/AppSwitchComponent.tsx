/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Switch } from './components/Switch';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export interface IHelloStates {}

@Widget({
    moduleName: "app-switch", 
    translator: "app-switch"
})
export class AppSwitchComponent extends React.Component<IHelloProps, IHelloStates> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<IHelloProps> {
        const template = (
            <div>
                <Switch framework={this.props.compiler} compiler={this.props.framework} />
            </div>
        );
        return template;
    }
}