/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { WgProvider } from '../../../scripts/rtx/RTX';
import { Hello } from './components/Hello';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export interface IHelloStates {}

@WgProvider({
    moduleName: "app-hello", 
    translator: "app-hello"
})
export class AppHelloWidget extends React.Component<IHelloProps, IHelloStates> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<IHelloProps> {
        const template = (
            <div>
                <Hello framework={this.props.compiler} compiler={this.props.framework} />
            </div>
        );
        return template;
    }
}