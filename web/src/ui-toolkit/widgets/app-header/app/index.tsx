/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { Widget } from '../../../../scripts/rtx/RTX';
import { AppHeaderWidget } from '../AppHeaderWidget';

@Widget({
    moduleName: "app-header",
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
            <div>
                <AppHeaderWidget framework="React" compiler="TypeScript" headerTitle="Header Title"/>
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);