/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { Widget } from '../../../../scripts/rtx/RTX';
import { IHeaderProps, IHeaderState } from '../models/IHeader';
import { AppButtonComponent } from '../../../sandbox/app-button/AppButtonComponent';

@Widget({
    moduleName: "app-header",
    translator: "app-header"
})
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    permit: any;
    configs: any;
    translator: any;

    constructor() {
        super();
        this.state = {
            logo_image: ""
        }
    }

    handleBtnsEvent(name: string, data: any) {
        switch (name) {
            case "l":
                alert(data);
                break;
            case "b":
                alert(data);
                break;
            default:
                alert("No buttons matched");
        }
    }

    componentWillMount() {
        console.log(this.permit)
        console.log(this.translator)
        console.log(this.configs)
        console.log(this.configs.themeConfigs.images + this.configs.currentTheme + '.png')
        this.setState({
            logo_image: require('../../../../' + this.configs.themeConfigs.images + this.configs.currentTheme + '.png')
        })
    }

    render(): React.ReactElement<IHeaderProps> {
        const template = (
            <div className="cointainer-fluid usage-header-widget">
                <div className="container">
                    <div className="row header_row">
                        <div className="col-xs-4">
                            <div className="header_image">
                                <img src={this.state.logo_image} />
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header_title">
                                <h2>{this.props.headerTitle}</h2>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header_btns">
                                <div className="btns_seperator">
                                    <AppButtonComponent theme="dark" text="Back" customTheme="" eventClick={this.handleBtnsEvent.bind(this, "b", "Go back")}/>
                                </div>
                                <div>
                                    <AppButtonComponent theme="dark" text="Logout" customTheme="" eventClick={this.handleBtnsEvent.bind(this, "l", "Log out")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return template;
    }
}