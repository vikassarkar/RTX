/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppSwitchComponent } from '../AppSwitchComponent';

@Widget({
    moduleName: "app-switch", 
    translator: "app"
})

class App extends React.Component<{}, {}> {
    permit: any;
    configs: any;
    translator: any;

    componentDidMount() {
        document.title = this.translator.TITLE;
    }
    render(): React.ReactElement<{}> {
        const template = (
            <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppSwitchComponent".
                    </h2>
                    <div className="col-xs-12 text-center">
                        while you use ".bind" in eventchange it is necessary to pass "this" as first argument.
                    </div>
                    <div className="col-xs-12 text-center">
                        customTheme is name of class if you want to add different theme.
                    </div>
                    <AppSwitchComponent />
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