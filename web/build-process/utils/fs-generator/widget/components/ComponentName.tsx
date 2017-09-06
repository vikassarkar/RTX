
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ComponentNameProps from '../models/ComponentName'

export class ComponentName extends React.Component<ComponentNameProps.IComponentNameProps, undefined> {

    render (): React.ReactElement<ComponentNameProps.IComponentNameProps> {
        
        return (
            <h1> its ComponentName component build by {this.props.compiler} and {this.props.framework}!!</h1>
        );
    }
}