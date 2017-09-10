/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { SbProvider } from '../../../../scripts/rtx/RTX';
import { AppCollapseComponent } from '../AppCollapseComponent';
import { AppButtonComponent } from '../../app-button/AppButtonComponent';
import { AppHeaderWidget } from '../../../widgets/app-header/AppHeaderWidget';

@SbProvider({
    moduleName: "app-button",
    translator: "app"
})

class App extends React.Component<{}, {}> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
    }

    /**
     * handle button event used inside collapsible
     * @param params
     */
    _handleIndexBack(params: any) {
        console.log(params);
        alert("you can set this value in state named as per data attr as ######: " + params.data);
    }

    /**
     * handle toggle collapse
     * @param params
     */
    _accordToggled(params: any) {
        console.log(params);
        alert("you can set this value in state named as per data attr as : " + params.data + ". Accordion opened : " + params.open);
    }

    /**
     * child template to be used inside collapsible
     */
    _childElement(): any {
        return (
            <div className="col-xs-12">
                <div className="col-xs-4">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
                <div className="col-xs-4">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
                <div className="col-xs-4">
                    <h3>Column 3</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
                <div className="col-xs-12 text-right">
                    <AppButtonComponent
                        theme="dark"
                        text="AppButtonComponent"
                        data="dummyButton"
                        eventClick={this._handleIndexBack}/>
                </div>
            </div>
        )
    }

    /**
     * React utility method after component was mounted
     */
    componentDidMount() {
        document.title = this.translator.TITLE;
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<{}> {
        const innerContainerStyle = {
            margin: "0 auto",
            float: "none"
        };
        const template = (
            <div>
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Collapse Component"/>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="col-xs-12 text-center">
                            It's a React "AppCollapseComponent".
                        </h2>
                        <div className="col-xs-12 text-center clearfix">
                            <div style={innerContainerStyle} className="col-xs-6 text-center">
                                <AppCollapseComponent
                                    defaultOpen={true}
                                    cutomCollapseLableStyle="contentWidth"
                                    showEndIcon={false}
                                    showStartIcon={true}
                                    startOpenIconClass="glyphicon glyphicon-minus-sign"
                                    startCloseIconClass="glyphicon glyphicon-plus-sign"
                                    endOpenIconClass="glyphicon glyphicon-chevron-down"
                                    endCloseIconClass="glyphicon glyphicon-chevron-right"
                                    endIconTheme="dark"
                                    startIconTheme="dark"
                                    childCollapsibleTemplate={this._childElement() }
                                    eventToggle={ this._accordToggled}
                                    data="dummyCollapse"/>
                            </div>
                        </div>
                        <h3 className="col-xs-12 text-center">
                            Available icon themes are "dark / light ".
                        </h3>
                        <div className="col-xs-12 text-center">
                            <h3>Available properties</h3>
                            <p>defaultOpen: boolean; </p>
                            <p>cutomCollapseLableStyle: string; </p>
                            <p>customDescriptionStyle: string; </p>
                            <p> showEndIcon: boolean; </p>
                            <p> showStartIcon: boolean; </p>
                            <p>startOpenIconClass: string; </p>
                            <p>startCloseIconClass: string; </p>
                            <p>endOpenIconClass: string; </p>
                            <p>endCloseIconClass: string; </p>
                            <p>customEndIconStyle: string; </p>
                            <p>endIconTheme: string; </p>
                            <p>customStartIconStyle: string; </p>
                            <p>startIconTheme: string; </p>
                            <p> childCollapsibleTemplate: any; </p>
                            <p>eventToggle: any; </p>
                            <p>name: string; </p>
                        </div>
                    </div>
                </div>
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);