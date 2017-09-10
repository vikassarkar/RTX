/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppRadioCheckboxComponent } from '../AppRadioCheckboxComponent';
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
     * event to handle change event 
     * @param data
     */
    _handleRadioChecked(params: any) {
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
        const alignCenter = {
            float: "none",
            margin: "0 auto"
        }
        const template = (
            <div>
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Radio-checkbox Component"/>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="col-xs-12 text-center">
                            It's a React "AppButtonComponent".
                        </h2>
                        <div className="col-xs-5 text-left" style={alignCenter} >
                            <AppRadioCheckboxComponent
                                theme="transparent"
                                defaultChecked={true}
                                data="firstRadioButton"
                                radioGroup="group_1"
                                eventChange={this._handleRadioChecked}/>
                            <AppRadioCheckboxComponent
                                theme="dark"
                                data="secondRadioButton"
                                radioGroup="group_1"
                                eventChange={this._handleRadioChecked}/>
                            <AppRadioCheckboxComponent
                                theme="dark"
                                data="thirdRadioButton"
                                radioGroup="group_1"
                                eventChange={this._handleRadioChecked}/>
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
                            <p>labelTemplate: any; </p>
                            <p>theme: string; </p>
                            <p>eventChange: any; </p>
                            <p>data: any; </p>
                            <p>customTheme: string; </p >
                            <p>checkboxShape: string; </p>
                            <p>defaultChecked: boolean; </p>
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