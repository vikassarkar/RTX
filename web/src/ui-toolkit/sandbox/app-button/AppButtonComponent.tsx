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

    eventClick(data:any) {
        alert(data)
    }

    render(): React.ReactElement<any> {
        const template = (
            <div>
                <Button 
                    text={this.props.text || "Button"} 
                    theme={this.props.theme || ""} 
                    customTheme={this.props.customTheme || ""} 
                    eventClick={this.props.eventClick || this.eventClick.bind(this, "button clicked")}/>
            </div>
        );
        return template;
    }
}