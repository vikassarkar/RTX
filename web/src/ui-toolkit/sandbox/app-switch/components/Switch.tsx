
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {ISwitchProps, ISwitchStates} from '../models/ISwitch'

@Widget({
    moduleName: "app-hello",
    translator: "app"
})
export class Switch extends React.Component<ISwitchProps, ISwitchStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props:any) {
        super(props);
        this.switchChanged = this.switchChanged.bind(this);
    }

    switchChanged(event: any) {
        this.props.eventChange(event.target.checked, event.target.name);
    }

    render(): React.ReactElement<ISwitchProps> {
        const template = (
            <div className="simple_switch">
                <label className={"tgl " + this.props.theme + this.props.customTheme} >
                    <input type="checkbox" defaultChecked={this.props.isChecked} onChange={this.switchChanged} name={this.props.name}/>
                    <span data-on={this.props.onText || "YES"} data-off={this.props.offText || "NO"}></span>
                </label>
            </div>
        );
        return template;
    }
}