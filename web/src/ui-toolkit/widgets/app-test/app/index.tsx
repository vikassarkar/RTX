/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import { WgProvider } from '../../../../scripts/rtx/RTX';
import { AppTestWidget } from '../AppTestWidget';

@WgProvider({
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
    _handleClickEvent(params: any) {
        console.log(params);
        alert("Welcome to Test toolkit")
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

            <div className="container">
                <div className="row text-center">
                    <h2 className="col-xs-12 text-center">
                        It's a React "AppTestWidget".
                    </h2>
                    <div className="col-xs-12 text-center">
                        <AppComponent
                            text="Index Back"
                            data="dummydata"
                            eventClick={this._handleClickEvent}/>
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