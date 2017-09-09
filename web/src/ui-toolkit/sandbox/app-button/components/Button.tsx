
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {IButtonProps, IButtonStates} from '../models/IButton'

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class Button extends React.Component<IButtonProps, IButtonStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props:any) {
        super(props);        
        this.eventClick = this.eventClick.bind(this);
    }

    eventClick(event: any) {
        this.props.eventClick(event.target.dataset.params);
    }

    render(): React.ReactElement<IButtonProps> {
        const template = (
            <button className={"app_btn " + this.props.theme + this.props.customTheme} data-params={this.props.data} onClick={this.eventClick}>{this.props.text}</button>
        );
       return template;
    }
}