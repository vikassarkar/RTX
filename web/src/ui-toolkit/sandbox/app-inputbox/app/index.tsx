/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { SbProvider } from '../../../../scripts/rtx/RTX';
import { AppInputboxComponent } from '../AppInputboxComponent';
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
     * handle change input event
     * @param params
     */
    _handleEventChange(params: any) {
        console.log("you can set this value in state named as per data attr as : " + params.data);
    }

    /**
     * handle key up input event
     * @param params
     */
    _handleEventKeypress(params: any) {
        console.log("you can set this value in state named as per data attr as : " + params.data);
    }

    /**
     * handle blur input event
     * @param params
     */
    _handleEventBlur(params: any) {
        console.log("you can set this value in state named as per data attr as : " + params.targetEvt.value);
    }

    /**
     * handle clear input icon event
     * @param params
     */
    _handleEventClearInput(params: any) {
        console.log(params)
        console.log("you can set this value in state named as per data attr as : " + params.data);
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
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Inputbox Component"/>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="col-xs-12 text-center">
                            It's a React "AppInputboxComponent".
                        </h2>
                        <div className="col-xs-12 text-center clearfix">
                            <div style={innerContainerStyle} className="col-xs-6 text-center">
                                <AppInputboxComponent
                                    theme="light"
                                    hideErrors={false}
                                    highlightInputError={false}
                                    highlightLabelError={false}
                                    eventChange={this._handleEventChange}
                                    eventKeypress={this._handleEventKeypress}
                                    eventBlur={this._handleEventBlur}
                                    eventClearInput={this._handleEventClearInput}/>
                            </div>
                        </div>
                        <h3 className="col-xs-12 text-center">
                            while you use ".bind" in eventclick it is necessary to pass "this" as first argument.
                        </h3>
                        <h3 className="col-xs-12 text-center">
                            Available themes are "dark / light ".
                        </h3>
                        <div>
                            <h3>Available properties</h3>
                            <p>inputLabel: string; </p>
                            <p>showLabelLeft: boolean; </p>
                            <p>showLabelTop: boolean; </p>
                            <p>placeHolder: string; </p>
                            <p>hideErrors: boolean; </p >
                            <p>theme: string; </p >
                            <p>validations: string; </p >
                            <p>highlightInputError: boolean; </p >
                            <p>highlightLabelError: boolean; </p >
                            <p>customInputStyle: string; </p >
                            <p>customTopLabelStyle: string; </p >
                            <p>customLeftLabelStyle: string; </p >
                            <p>showClearButton: boolean; </p >
                            <p>eventChange: any; </p >
                            <p>eventKeypress: any; </p >
                            <p>eventBlur: any; </p >
                            <p>eventClearInput: any; </p >
                            <p>data: any; </p >
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