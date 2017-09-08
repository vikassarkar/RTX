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
    theme: string;
    customTheme: string;
    onText: string;
    offText: string;
    isChecked: boolean;
    eventChange: any;
}

export interface ISwitchStates { }

@Widget({
    moduleName: "app-switch",
    translator: "app"
})
export class AppSwitchComponent extends React.Component<ISwitchProps, ISwitchStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this.switchChanged = this.switchChanged.bind(this);
    }

    switchChanged(isChecked: boolean) {
        this.props.eventChange(isChecked);
    }

    render(): React.ReactElement<ISwitchProps> {
        const template = (
            <div>
                <Switch  theme={this.props.theme}
                    customTheme={this.props.customTheme}
                    onText={this.props.onText}
                    offText={this.props.offText}
                    isChecked={this.props.isChecked}
                    eventChange={this.switchChanged}/>
            </div>
        );
        return template;
    }
}