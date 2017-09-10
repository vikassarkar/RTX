
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {ICheckboxProps, ICheckboxStates} from '../models/ICheckbox'

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class Checkbox extends React.Component<ICheckboxProps, ICheckboxStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props:any) {
        super(props);        
        this._eventClick = this._eventClick.bind(this);
    }

    /**
     * button click event handler
     * @param event
     */
    _eventClick(event: any) {
        this.props.eventClick({
            "event": event,
            "data": event.target.dataset.params
        });
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<ICheckboxProps> {
        const template = (
            <button
                className={"app_btn " + this.props.theme + this.props.customTheme}
                data-params={this.props.data} onClick={this._eventClick}>
                {this.props.text}
            </button>
        );
       return template;
    }
}