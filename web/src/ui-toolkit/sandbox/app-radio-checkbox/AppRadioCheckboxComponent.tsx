/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { RadioCheckbox } from './components/RadioCheckbox';

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppRadioCheckboxComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this._eventChange = this._eventChange.bind(this);
    }

    /**
     * event handler for change event of radio
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
        const radioId = "radio_" + Math.round(Math.random() * 10000) + 1;
        const template = (
            <div>
                <RadioCheckbox
                    defaultChecked={this.props.hasOwnProperty('defaultChecked') ? this.props.defaultChecked : false}
                    labelTemplate={this.props.labelTemplate || "Radio Lable to choose " + this.props.theme || "dark"}
                    theme={this.props.theme || "dark"}
                    eventChange={this._eventChange}
                    data={this.props.data || "radioDummy"}
                    customTheme={this.props.customTheme || ""}
                    radioShape={this.props.radioShape || "square"}
                    radioGroup={this.props.radioGroup || "radio_group"}/>
            </div>
        );
        return template;
    }
}