/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppButtonComponent } from '../AppButtonComponent';

@Widget({
    moduleName: "app-button",
    translator: "app"
})

class App extends React.Component<{}, {}> {
    permit: any;
    configs: any;
    translator: any;

    handleIndexBack(data: any) {
        alert("hi " + data);
    }

    componentDidMount() {
        document.title = this.translator.TITLE;
    }

    render(): React.ReactElement<{}> {
        const template = (
            <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppButtonComponent".
                    </h2>
                    <div className="col-xs-12 text-center">
                        while you use ".bind" in eventclick it is necessary to pass "this" as first argument.
                    </div>
                    <div className="col-xs-12 text-center">
                        Available themes are "dark / light /transparent".
                    </div>
                    <div className="col-xs-12 text-center">
                        customTheme is name of class if you want to add different theme.
                    </div>

                    <AppButtonComponent theme="transparent" text="Index Back" customTheme="" eventClick={this.handleIndexBack.bind(this, "vikas") }/>
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