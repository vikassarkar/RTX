/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Checkbox } from './components/Checkbox';

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppCheckboxComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this._eventChange = this._eventChange.bind(this);
    }

    /**
     * event handler for click event of button
     * @param data
     */
    _eventChange(params: any) {
        if (this.props.eventChange)
            this.props.eventChange(params);
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {

        const checkboxId = "radio_" + Math.round(Math.random() * 10000) + 1;
        const template = (
            <div>
                <Checkbox 
                    defaultChecked={this.props.hasOwnProperty('defaultChecked') ? this.props.defaultChecked : false}
                    labelTemplate={this.props.labelTemplate || "Checkbox Lable to choose " + checkboxId}
                    theme={this.props.theme || "dark"}
                    eventChange={this._eventChange}
                    data={this.props.data || "radioDummy"}
                    customTheme={this.props.customTheme || ""}
                    checkboxShape={this.props.radioShape || "square"}/>
            </div>
        );
        return template;
    }
}