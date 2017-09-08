/**
 * Created by: Vikas sarkar
 * date : 2017-07-15
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { BaseApp, Translate } from '../../scripts/rtx/RTX';
import { AppHelloWidget } from '../../ui-toolkit/widgets/app-hello/AppHelloWidget';


@BaseApp({
    moduleName: "app", //required for view template
    translator: "app"
})
class Application extends React.Component<{}, {}> {
    permit: any;
    configs: any;
    translator: any;

    componentDidMount() {
        document.title = this.translator.TITLE;
    }
    render(): React.ReactElement<{}> {
        const template = (
            <div className="container theme-showcase" role="main">
                <h1>Agent Search</h1>
                <AppHelloWidget framework="React" compiler="TypeScript" />
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById("root")
);