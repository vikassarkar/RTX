/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Button } from './components/Button';

export interface IButtonProps {
    text: string;
    theme: string; //dark / light /transparent
    eventClick: any;
    customTheme: string;
}

export interface IButtonStates {}

@Widget({
    moduleName: "app-button", 
    translator: "app"
})
export class AppButtonComponent extends React.Component<IButtonProps, IButtonStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    render(): React.ReactElement<IButtonProps> {
        const template = (
            <div>
                <Button text={this.props.text} theme={this.props.theme} customTheme="" eventClick={this.props.eventClick}/>
            </div>
        );
        return template;
    }
}