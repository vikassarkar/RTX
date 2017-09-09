/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Collapse } from './components/Collapse';

export interface ICollapseProps {
    defaultOpen: boolean;
}

export interface ICollapseStates {}

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppCollapseComponent extends React.Component<ICollapseProps, ICollapseStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    render(): React.ReactElement<ICollapseProps> {
        const template = (
            <div>
                <Collapse defaultOpen={this.props.defaultOpen}/>
            </div>
        );
        return template;
    }
}