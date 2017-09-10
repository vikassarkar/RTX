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
        this._switchChanged = this._switchChanged.bind(this);
    }

    /**
     * switch toggle event handler
     * @param isChecked
     * @param name
     */
    _switchChanged(params:any) {
        if (this.props.eventChange)
            this.props.eventChange(params);
    }

    /**
    * React utility method after component was mounted
    */
    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Switch  theme={this.props.theme || ""}
                    customTheme={this.props.customTheme || ""}
                    onText={this.props.onText || "On"}
                    offText={this.props.offText || "Off"}
                    defaultChecked={this.props.defaultChecked || false}
                    data={this.props.data || ""}
                    eventChange={this._switchChanged}/>
            </div>
        );
        return template;
    }
}