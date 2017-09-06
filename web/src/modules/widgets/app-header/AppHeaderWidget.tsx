/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import {Header} from './components/Header';

export interface IHeaderProps {
    compiler: string;
    framework: string;
};

@Widget({
    moduleName: "app-header",
    translator: "app-header"
})
export class AppHeaderWidget extends React.Component<IHeaderProps, {}> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<IHeaderProps> {
        const template = (
            <div>
                <Header framework={this.props.compiler} compiler={this.props.framework} />
            </div>
        );
        return template;
    }
}