/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppCheckboxComponent } from '../AppCheckboxComponent';
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
     * event to handle checkbox event 
     * @param data
     */
    _handleChangeEvent(params: any) {
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
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Checkbox Component"/>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="col-xs-12 text-center">
                            It's a React "AppCheckboxComponent".
                        </h2>
                        <div className="col-xs-5 text-left" style={alignCenter}>
                            <AppCheckboxComponent
                                theme="light"
                                defaultChecked={true}
                                data="firstCheckboxButton"
                                eventChange={this._handleChangeEvent}/>
                            <AppCheckboxComponent
                                theme="dark"
                                defaultChecked={true}
                                data="secondCheckboxButton"
                                eventChange={this._handleChangeEvent}/>
                            <AppCheckboxComponent
                                theme="transparent"
                                defaultChecked={true}
                                data="thirdCheckboxButton"
                                eventChange={this._handleChangeEvent}/>
                        </div>
                        <h3 className="col-xs-12 text-center">
                            while you use ".bind" in eventclick it is necessary to pass "this" as first argument.
                        </h3>
                        <h3 className="col-xs-12 text-center">
                            Available themes are "dark / light / transparent".
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