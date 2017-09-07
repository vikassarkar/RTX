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

    handleIndexBack(data:any) {
        alert("hi " + data);
    }

    componentDidMount() {
        document.title = this.translator.TITLE;
    }

    render(): React.ReactElement<{}> {
        const template = (
            <AppButtonComponent theme="dark" text="Index Back" eventClick={this.handleIndexBack.bind(this, "vikas")}/> // necessary to pass this as first argument
        );
        return template;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);