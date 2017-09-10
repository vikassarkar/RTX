/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Button } from './components/Button';

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppButtonComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    /**
     * event handler for click event of button
     * @param data
     */
    _eventClick(data: string) {
        if(this.props.eventClick)
            this.props.eventClick(data);
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Button 
                    text={this.props.text || "Button"} 
                    theme={this.props.theme || ""} 
                    customTheme={this.props.customTheme || ""} 
                    data={this.props.data || "dummyButton"}
                    eventClick={this.props.eventClick || this._eventClick}/>
            </div>
        );
        return template;
    }
}