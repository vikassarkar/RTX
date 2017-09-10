/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppInputboxComponent } from '../AppInputboxComponent';

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

    /**
     * handle change input event
     * @param val
     * @param data
     * @param validation
     */
    _handleEventChange(val:string, data: string, validation:any) {
        console.log("you can set this value in state named as per data attr as : " + data);
    }

    /**
     * handle key up input event
     * @param val
     * @param data
     * @param validation
     */
    _handleEventKeypress(val: string, data: string, validation: any) {
        console.log("you can set this value in state named as per data attr as : " + data);
    }

    /**
     * handle blur input event
     * @param val
     * @param data
     * @param validation
     */
    _handleEventBlur(val: string, data: string, validation: any) {
        console.log("you can set this value in state named as per data attr as : " + data);
    }

    /**
     * handle clear input icon event
     * @param val
     * @param data
     * @param validation
     */
    _handleEventClearInput(val: string, data: string, validation: any) {
        console.log("you can set this value in state named as per data attr as : " + data);
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
            float:"none"
        };

        const template = (
            <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppInputboxComponent".
                    </h2>                   
                   <div className="col-xs-12 text-center clearfix">
                        <div style={innerContainerStyle} className="col-xs-6 text-center">
                            <AppInputboxComponent 
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
                        Available themes are "dark / light / transparent".
                    </h3>
                    <h3 className="col-xs-12 text-center">
                        customTheme is name of class if you want to add different theme.
                    </h3>
                    <div>
                        <h3>Available properties</h3>
                        <p>text: string;</p>
                        <p>theme: string; //dark / light / transparent</p>
                        <p>eventClick: any; </p>
                        <p>customTheme: string; </p>
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