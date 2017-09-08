
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

    switchChanged(isOn: boolean) {

    }

    render(): React.ReactElement<ISwitchProps> {
        const template = (
            <div className="switch_container">
                <div className="switch">
                    <input id="switch" type="checkbox" className="switch_checkbox"/>
                    <label htmlFor="switch"><i></i></label>
                </div>
            </div>
        );
        return template;
    }
}