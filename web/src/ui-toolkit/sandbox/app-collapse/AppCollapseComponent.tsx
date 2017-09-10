/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Collapse } from './components/Collapse';

@Widget({
    moduleName: "app-button",
    translator: "app"
})
export class AppCollapseComponent extends React.Component<any, any> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    /**
     * toggle collpse event
     * @param isChecked
     * @param name
     */
    _eventToggle(params:any) {
        if(this.props.eventToggle)
            this.props.eventToggle(params);
    }

    /**
     * default child element for collapsible section
     */
    _childElement(): any {
        return (
            <div>
                <h3>Two columns with two nested columns</h3>
                <p>Per the documentation, nesting is easy—just put a row of columns within an existing column.This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>
            </div>
        )
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<any> {

        const template = (
            <div>
                <Collapse
                    defaultOpen={this.props.hasOwnProperty('defaultOpen') ? this.props.defaultOpen : false}
                    showEndIcon={this.props.hasOwnProperty('showEndIcon') ? this.props.showEndIcon : false}
                    showStartIcon={this.props.hasOwnProperty('showStartIcon') ? this.props.showStartIcon : true}
                    cutomCollapseLableStyle={this.props.cutomCollapseLableStyle || "contentWidth"}
                    customDescriptionStyle={this.props.customDescriptionStyle || ""}
                    startOpenIconClass= {this.props.startOpenIconClass || "glyphicon glyphicon-minus-sign"}
                    startCloseIconClass={this.props.startCloseIconClass || "glyphicon glyphicon-plus-sign"}
                    endOpenIconClass={this.props.endOpenIconClass || "glyphicon glyphicon-chevron-down"}
                    endCloseIconClass={this.props.endCloseIconClass || "glyphicon glyphicon-chevron-right"}
                    customEndIconStyle={this.props.customEndIconStyle || ""}
                    customStartIconStyle={ this.props.customStartIconStyle || ""}
                    endIconTheme={this.props.endIconTheme || "dark"}
                    startIconTheme={this.props.startIconTheme || "dark"}
                    childCollapsibleTemplate={this.props.childCollapsibleTemplate || this._childElement()} 
                    eventToggle={this.props.eventToggle || this._eventToggle}
                    data={this.props.data|| ""}/>
            </div>
        );
        return template;
    }
}