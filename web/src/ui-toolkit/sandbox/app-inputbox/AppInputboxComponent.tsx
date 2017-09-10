/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Inputbox } from './components/Inputbox';

@Widget({
    moduleName: "app-button",
    translator: "app"
})
export class AppInputboxComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    /**
     * default change input event
     * @param val
     * @param data
     * @param validation
     */
    _eventChange(val: string, data: string, validation: any) {
        if (this.props.eventChange)
            this.props.eventChange(data);
    }

    /**
     * default keypress event
     * @param val
     * @param data
     * @param validation
     */
    _eventKeypress(val: string, data: string, validation: any) {
        if (this.props.eventKeypress)
            this.props.eventKeypress(data);
    }

    /**
     * default Blur event
     * @param val
     * @param data
     * @param validation
     */
    _eventBlur(val: string, data: string, validation: any) {
        if (this.props.eventBlur)
            this.props.eventBlur(data);
    }

    /**
     * default clear input click event
     * @param val
     * @param data
     * @param validation
     */
    _eventClearInput(val: string, data: string, validation: any) {
        if (this.props.eventBlur)
            this.props.eventBlur(data);
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Inputbox
                    inputLabel={this.props.inputLabel || "Input Label"}
                    showLabelLeft={this.props.labelLeft || false}
                    showLabelTop={this.props.labelTop || true}
                    placeHolder={this.props.placeHolder || "username@domain.com"}
                    data={this.props.data || "dummyData"}
                    hideErrors= {this.props.showError || false}
                    theme={this.props.theme || "light"}
                    validations={this.props.validations || "required|email"}
                    highlightInputError={this.props.highlightInputError || true}
                    highlightLabelError={this.props.highlightLabelError || true}
                    customInputStyle={this.props.customInputStyle || ""}
                    customTopLabelStyle={this.props.customTopLabelStyle || ""}
                    customLeftLabelStyle={this.props.customLeftLabelStyle || ""}
                    showClearButton={this.props.showClearButton || true}
                    eventChange={this.props.eventChange || this._eventChange}
                    eventKeypress={this.props.eventKeypress || this._eventKeypress}
                    eventBlur={this.props.eventBlur || this._eventBlur}
                    eventClearInput={this.props.eventClearInput || this._eventClearInput}/>
            </div>
        );
        return template;
    }
}