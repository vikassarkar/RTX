/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Switch } from './components/Switch';

export interface ISwitchProps {
}

export interface ISwitchStates {}

@Widget({
    moduleName: "app-switch", 
    translator: "app"
})
export class AppSwitchComponent extends React.Component<ISwitchProps, ISwitchStates> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<ISwitchProps> {
        const template = (
            <div>
                <Switch />
            </div>
        );
        return template;
    }
}