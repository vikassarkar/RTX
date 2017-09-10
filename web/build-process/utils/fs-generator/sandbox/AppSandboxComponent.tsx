/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Sandbox } from './components/Sandbox';

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppSandboxComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this._eventClick = this._eventClick.bind(this);
    }

    /**
     * event handler for click event of button
     * @param data
     */
    _eventClick(params: any) {
        if(this.props.eventClick)
            this.props.eventClick(params);
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Sandbox 
                    text={this.props.text || "Sandbox Component"} 
                    eventClick={this._eventClick} 
                    data={this.props.data || "default_dummy_data"}/>
            </div>
        );
        return template;
    }
}