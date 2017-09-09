/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppCollapseComponent } from '../AppCollapseComponent';

@Widget({
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

    accordToggled(isChecked: boolean, name: string) {
        alert("you can set this value in state named as per data attr as : " + name+". Accordion opened : "+isChecked);
    }

    childElement(): any {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
                <div className="col-sm-4">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
                <div className="col-sm-4">
                    <h3>Column 3</h3>
                    <p>Lorem ipsum dolor..</p>
                    <p>Ut enim ad..</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.title = this.translator.TITLE;
    }

    render(): React.ReactElement<{}> {
        const innerContainerStyle = {
            margin: "0 auto",
            float:"none"
        };
        const template = (
            <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppCollapseComponent".
                    </h2>                   
                    <div className="col-xs-12 text-center clearfix">
                        <div style={innerContainerStyle} className="col-xs-5 text-center">
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
                                childCollapsibleTemplate={this.childElement()}
                                eventToggle={ this.accordToggled}
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
                        <p>eventToggle:any; </p>
                        <p>name:string; </p>
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