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

    constructor(props: any) {
        super(props);
        this.switchChanged = this.switchChanged.bind(this);
    }

    switchChanged(isChecked: boolean, name: string) {        
        alert("you can set this value in state named as per name attr as : " + name+". Switched on : "+isChecked);
    }

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
                        <AppSwitchComponent 
                            theme=""
                            customTheme=""
                            onText="Yes"
                            offText="No"
                            defaultChecked={true}
                            name="firstSwitch"
                            eventChange={this.switchChanged}/>
                    </div>

                    <div className="col-xs-12 text-center">
                        <AppSwitchComponent theme="dark"
                            customTheme=""
                            onText="ON"
                            offText="OFF"
                            defaultChecked={false}
                            name="secondSwitch"
                            eventChange={this.switchChanged}/>
                    </div>
                    
                    <h3 className="col-xs-12 text-center">
                        while you use ".bind" in eventchange it is necessary to pass "this" as first argument.
                    </h3>
                    <h3 className="col-xs-12 text-center">
                        customTheme is name of class if you want to add different theme if not used assig it empty string.
                    </h3>
                    <div className="col-xs-12 text-center">
                        <h3>Available properties</h3>
                         <p>theme: string;</p>
                        <p>customTheme: string;</p>
                        <p>onText: string;</p>
                        <p>offText: string;</p>
                        <p>defaultChecked: boolean;</p>
                        <p>eventChange: any;</p>
                        <p>name: string;</p>
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