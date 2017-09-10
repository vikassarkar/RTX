/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { WgProvider } from '../../../scripts/rtx/RTX';
import { WidgetComponent } from './components/WidgetComponent';

@WgProvider({
    moduleName: "app-widget", 
    translator: "app"
})
export class AppWidgetComponent extends React.Component<any, any> {
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
                <WidgetComponent 
                    text={this.props.text || "Widget Component"} 
                    eventClick={this._eventClick} 
                    data={this.props.data || "default_dummy_data"}/>
            </div>
        );
        return template;
    }
}