
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SbProvider, Translate } from '../../../../scripts/rtx/RTX';
import {ICheckboxProps, ICheckboxStates} from '../models/ICheckbox'

@SbProvider({
    moduleName: "app-button", 
    translator: "app"
})
export class Checkbox extends React.Component<ICheckboxProps, ICheckboxStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props:any) {
        super(props);        
        this._eventChange = this._eventChange.bind(this);
    }

    /**
     * button click event handler
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
    render(): React.ReactElement<ICheckboxProps> {
        const checkboxShape = this.props.checkboxShape + " ";
        const theme = this.props.theme + " ";
        const template = (
            <label className="checkbox_block">
                <input
                    type="checkbox"        
                    defaultChecked={this.props.defaultChecked}            
                    className="checkbox_custom"
                    data-params = {this.props.data}
                    onClick={this._eventChange}/>
                <span className={"checkbox_custom_label " + checkboxShape + theme + this.props.customTheme}>{this.props.labelTemplate}</span>
            </label>
        );
       return template;
    }
}