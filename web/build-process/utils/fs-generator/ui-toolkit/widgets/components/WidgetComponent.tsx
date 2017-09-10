
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { WgProvider, Translate } from '../../../../scripts/rtx/RTX';
import {IWidgetComponentProps, IWidgetComponentStates} from '../models/IWidgetComponent'

@WgProvider({
    moduleName: "app-widget", 
    translator: "app"
})
export class WidgetComponent extends React.Component<IWidgetComponentProps, IWidgetComponentStates> {
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
            "data":event.target.dataset.params
        });
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<IWidgetComponentProps> {
        const template = (
            <div className="col-xs-12 text-center widget_block">
                <a onClick={this._eventClick} data-params={this.props.data} >{this.props.text}</a>
             </div> 
        );
       return template;
    }
}