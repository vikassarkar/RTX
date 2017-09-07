
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Widget, Translate } from '../../../../scripts/rtx/RTX';
import {IHelloProps, IHelloStates} from '../models/IHello'

@Widget({
    moduleName: "app-hello", 
    translator: "app-hello"
})
export class Hello extends React.Component<IHelloProps, IHelloStates> {
    permit: any;
    configs: any;
    translator: any;

    render(): React.ReactElement<IHelloProps> {
       const template = (
           <div>
               <h1 className="header">{Translate("DUMMY_DATA", this.translator)}</h1>
               <h1 className="header">Hello from {this.props.compiler} and {this.props.framework}!!</h1>
           </div>
        );
       return template;
    }
}