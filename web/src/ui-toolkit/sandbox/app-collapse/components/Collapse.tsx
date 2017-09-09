
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {ICollapseProps, ICollapseStates} from '../models/ICollapse'

@Widget({
    moduleName: "app-button",
    translator: "app"
})
export class Collapse extends React.Component<ICollapseProps, ICollapseStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this.state = { isOpened: this.props.defaultOpen };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse(event: any) {
        this.setState({ isOpened: event.target.checked })
    }

    render(): React.ReactElement<ICollapseProps> {
        
        const template = (
            <div className="collapse_row">
                <label className="collaspse_label">
                    <input type="checkbox" defaultChecked={this.props.defaultOpen} onChange={this.toggleCollapse}/>
                    <span className="icon_start">
                        <i className={this.state.isOpened ? "glyphicon glyphicon-minus-sign" : "glyphicon glyphicon-plus-sign"}></i>
                    </span>
                    <span className="collapse_title">collapse</span>
                    <span className="icon_end">
                        <i className={this.state.isOpened ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-right" }></i>
                    </span>
                </label>
                <div className={this.state.isOpened ? "collapse_description slidedown" : "collapse_description slideup"}>
                    <div className="description_container">
                        Collapse description
                        </div>
                </div>
            </div>
        );
        return template;
    }
}





