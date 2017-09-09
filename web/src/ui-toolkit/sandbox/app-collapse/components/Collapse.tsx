
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
        this.setState({ isOpened: event.target.checked });
        this.props.eventToggle(event.target.checked, event.target.name);
    }

    render(): React.ReactElement<ICollapseProps> {
        const template = (
            <div className="collapse_row">
                <label className={"collaspse_label " + this.props.cutomCollapseLableStyle}>
                    <input type="checkbox" defaultChecked={this.props.defaultOpen} onChange={this.toggleCollapse} name={this.props.name}/>
                    <span className={this.props.showStartIcon ? "icon_start" : "icon_hide" }>
                        <i className={this.state.isOpened ? this.props.startIconTheme + " " + this.props.startOpenIconClass + " " + this.props.customStartIconStyle : this.props.startIconTheme + " " + this.props.startCloseIconClass + " " + this.props.customEndIconStyle}></i>
                    </span>
                    <span className="collapse_title">collapse</span>
                    <span className={this.props.showEndIcon ? "icon_end" : "icon_hide" }>
                        <i className={this.state.isOpened ? this.props.endIconTheme + " " + this.props.endOpenIconClass + " " + this.props.customEndIconStyle : this.props.endIconTheme + " " + this.props.endCloseIconClass + " " + this.props.customEndIconStyle}></i>
                    </span>
                </label>
                <div className={this.state.isOpened ? "collapse_description slidedown" + this.props.customDescriptionStyle : "collapse_description slideup" + this.props.customDescriptionStyle}>
                    <div className="description_container">
                        {this.props.childCollapsibleTemplate}
                    </div>
                </div>
            </div>
        );
        return template;
    }
}





