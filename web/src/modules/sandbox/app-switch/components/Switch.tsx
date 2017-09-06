
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
    translator: "app-hello"
})
export class Switch extends React.Component<ISwitchProps, ISwitchStates> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<ISwitchProps> {
       const template = (
          <button>New button</button>
        );
       return template;
    }
}