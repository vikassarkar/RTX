/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppButtonComponent } from '../AppButtonComponent';
import { AppHeaderWidget } from '../../../widgets/app-header/AppHeaderWidget';

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
     * event to handle button click 
     * @param data
     */
    _handleIndexBack(params: any) {
        console.log(params);
        alert("you can set this value in state named as per data attr as : " + params.data);
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
        const template = (
            <div>
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Button Component"/>
                <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppButtonComponent".
                    </h2>                   
                    <div className="col-xs-12 text-center">
                        <AppButtonComponent 
                            theme="transparent" 
                            text="Index Back"
                            data="dummyButton"
                            eventClick={this._handleIndexBack}/>
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
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);