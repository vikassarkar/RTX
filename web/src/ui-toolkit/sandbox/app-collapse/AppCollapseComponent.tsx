/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../scripts/rtx/RTX';
import { Collapse } from './components/Collapse';

export interface ICollapseProps {

}

export interface ICollapseStates { }

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

    childElement(): any {
        return (
            <div>
                <h3>Two columns with two nested columns</h3>
                <p>Per the documentation, nesting is easy—just put a row of columns within an existing column.This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>
            </div>
        )
    }

    render(): React.ReactElement<any> {

        const template = (
            <div>
                <Collapse defaultOpen={this.props.defaultOpen || false}
                    cutomCollapseLableStyle={this.props.cutomCollapseLableStyle || "contentWidth"}
                    customDescriptionStyle={this.props.customDescriptionStyle || ""}
                    showEndIcon={this.props.showEndIcon || false}
                    showStartIcon={this.props.showStartIcon || true}
                    startOpenIconClass= {this.props.startOpenIconClass || "glyphicon glyphicon-minus-sign"}
                    startCloseIconClass={this.props.startCloseIconClass || "glyphicon glyphicon-plus-sign"}
                    endOpenIconClass={this.props.endOpenIconClass || "glyphicon glyphicon-chevron-down"}
                    endCloseIconClass={this.props.endCloseIconClass || "glyphicon glyphicon-chevron-right"}
                    customEndIconStyle={this.props.customEndIconStyle || ""}
                    customStartIconStyle={ this.props.customStartIconStyle || ""}
                    endIconTheme={this.props.endIconTheme || "dark"}
                    startIconTheme={this.props.startIconTheme || "dark"}
                    childCollapsible={this.props.childCollapsible || this.childElement() }/>
            </div>
        );
        return template;
    }
}