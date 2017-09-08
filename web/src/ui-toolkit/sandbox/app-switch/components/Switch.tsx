
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
           <p className="btn-switch">
               <input type="radio" id="yes" name="switch" className="btn-switch__radio btn-switch__radio_yes" onChange={this.switchChanged.bind(this, true) }/>
               <input type="radio" id="no" name="switch" className="btn-switch__radio btn-switch__radio_no" defaultChecked onChange={this.switchChanged.bind(this, false)}/>
               <label htmlFor ="yes" className="btn-switch__label btn-switch__label_yes"><span className="btn-switch__txt">Yes</span></label>
               <label htmlFor ="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt">No</span></label>
           </p>
        );
       return template;
    }
}