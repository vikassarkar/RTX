/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { WgProvider } from '../../../../scripts/rtx/RTX';
import { AppSideMenuWidget } from '../AppSideMenuWidget';

@WgProvider({
    moduleName: "app-side-menu", 
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
                <AppSideMenuWidget framework="React" compiler="TypeScript" />
            </div>
        );
        return template;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);