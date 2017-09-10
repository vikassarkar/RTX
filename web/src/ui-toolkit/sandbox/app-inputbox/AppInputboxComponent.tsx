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
     * @param params
     */
    _eventChange(params:any) {
        if (this.props.eventChange)
            this.props.eventChange(params);
    }

    /**
     * default keypress event
     * @param params
     */
    _eventKeypress(params: any) {
        if (this.props.eventKeypress)
            this.props.eventKeypress(params);
    }

    /**
     * default Blur event
     * @param params
     */
    _eventBlur(params: any) {
        if (this.props.eventBlur)
            this.props.eventBlur(params);
    }

    /**
     * default clear input click event
     * @param params
     */
    _eventClearInput(params: any) {
        if (this.props.eventBlur)
            this.props.eventBlur(params);
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Inputbox
                    showLabelLeft={this.props.hasOwnProperty('showLabelLeft') ? this.props.showLabelLeft : false}
                    showLabelTop={this.props.hasOwnProperty('showLabelTop') ? this.props.showLabelTop : true}
                    hideErrors= {this.props.hasOwnProperty('hideErrors') ? this.props.hideErrors : false}
                    highlightInputError={this.props.hasOwnProperty('highlightInputError') ? this.props.highlightInputError : true}
                    highlightLabelError={this.props.hasOwnProperty('highlightLabelError') ? this.props.highlightLabelError : true}
                    showClearButton={this.props.hasOwnProperty('showClearButton') ? this.props.showClearButton : true}
                    inputLabel={this.props.inputLabel || "Input Label"}
                    placeHolder={this.props.placeHolder || "username@domain.com"}
                    data={this.props.data || "dummyData"}
                    theme={this.props.theme || "light"}
                    validations={this.props.validations || "required|email"}
                    customInputStyle={this.props.customInputStyle || ""}
                    customTopLabelStyle={this.props.customTopLabelStyle || ""}
                    customLeftLabelStyle={this.props.customLeftLabelStyle || ""}
                    eventChange={this.props.eventChange || this._eventChange}
                    eventKeypress={this.props.eventKeypress || this._eventKeypress}
                    eventBlur={this.props.eventBlur || this._eventBlur}
                    eventClearInput={this.props.eventClearInput || this._eventClearInput}/>
            </div>
        );
        return template;
    }
}