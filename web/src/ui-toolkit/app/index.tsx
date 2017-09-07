/**
 * Created by: Vikas sarkar
 * date : 2017-07-15
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { BaseApp, Translate } from '../../scripts/rtx/RTX';
import { AppHelloWidget } from '../widgets/app-hello/AppHelloWidget';
import { AppHeaderWidget } from '../widgets/app-header/AppHeaderWidget';


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
            <div>
                <AppHeaderWidget framework="React" compiler="TypeScript compiler" />
                <div className="container theme-showcase" role="main">
                    <AppHelloWidget framework="React" compiler="TypeScript" />
                </div>
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById("root")
);