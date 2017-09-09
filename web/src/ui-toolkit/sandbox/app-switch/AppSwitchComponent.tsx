/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Switch } from './components/Switch';

@Widget({
    moduleName: "app-switch",
    translator: "app"
})
export class AppSwitchComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this.switchChanged = this.switchChanged.bind(this);
    }

    switchChanged(isChecked: boolean, name: string) {
        if(this.props.eventChange)
            this.props.eventChange(isChecked, name);
    }

    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Switch  theme={this.props.theme || ""}
                    customTheme={this.props.customTheme || ""}
                    onText={this.props.onText || "On"}
                    offText={this.props.offText || "Off"}
                    defaultChecked={this.props.defaultChecked || false}
                    data={this.props.data || ""}
                    eventChange={this.switchChanged}/>
            </div>
        );
        return template;
    }
}