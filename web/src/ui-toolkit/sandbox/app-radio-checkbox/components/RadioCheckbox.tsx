
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {IRadioCheckboxProps, IRadioCheckboxStates} from '../models/IRadioCheckbox'

@Widget({
    moduleName: "app-button",
    translator: "app"
})
export class RadioCheckbox extends React.Component<IRadioCheckboxProps, IRadioCheckboxStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this._eventChange = this._eventChange.bind(this);
    }

    /**
     * radio button change event handler
     * @param event
     */
    _eventChange(event: any) {
        this.props.eventChange({
            "event": event,
            "checked": event.target.checked,
            "data": event.target.dataset.params
        });
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<IRadioCheckboxProps> {
        const radioShape = this.props.radioShape + " ";
        const theme = this.props.theme + " ";
        const template = (
            <label className="radio_checkbox">
                <input
                    type="radio"
                    defaultChecked={this.props.defaultChecked}
                    className="radio_custom"
                    name={this.props.radioGroup}
                    data-params = {this.props.data}
                    onClick={this._eventChange}/>
                <span className={"radio_custom_label " + radioShape + theme + this.props.customTheme}>{this.props.labelTemplate}</span>
            </label>
        );
        return template;
    }
}