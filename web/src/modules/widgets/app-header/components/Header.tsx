/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { Widget } from '../../../../scripts/rtx/RTX';
import { IHeaderProps, IHeaderState } from '../models/IHeader';

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
    componentWillMount() {
         console.log(this.permit)
         console.log(this.translator)
         console.log(this.configs)
         console.log(this.configs.themeConfigs.images + this.configs.currentTheme+'.png')
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
                        <div className="col-xs-8">
                            <div className="header_btns">
                                <button>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return template;
    }
}