
/**
*Created by Vikas Sarkar
*Date : 2017-07-07
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SbProvider, Translate } from '../../../../scripts/rtx/RTX';
import {IInputboxProps, IInputboxStates} from '../models/IInputbox'
import {Rules, DefaultMessages} from '../models/CValidatorRegex'

@SbProvider({
    moduleName: "app-button",
    translator: "app"
})
export class Inputbox extends React.Component<IInputboxProps, IInputboxStates> {
    permit: any;
    configs: any;
    translator: any;

    constructor(props: any) {
        super(props);
        this.state = {
            validation: {
                isValid: true,
                isDirty: false,
                message: ""
            }
        }
        this._clearInput = this._clearInput.bind(this);
        this._inputChanged = this._inputChanged.bind(this);
        this._keyPressed = this._keyPressed.bind(this);
        this._validateOnFocusOut = this._validateOnFocusOut.bind(this);
        this._applyRegxRules = this._applyRegxRules.bind(this);
        this._validateRegx = this._validateRegx.bind(this);
    }

    /**
     * clear input on clickevent
     * @param event
     */
    _clearInput(event: any) {
        event.target.parentElement.previousElementSibling.value = '';
        let evt = event;
        let targetEvt = event.target;
        let targetInput = event.target.parentElement.previousElementSibling;
        let inputValue = event.target.parentElement.previousElementSibling.value;
        let inputData = event.target.parentElement.previousElementSibling.dataset.params;
        this.setState({
            validation: this._validateFields(null, targetEvt)
        }, function () {
            console.log(this.state.validation);
            this.props.eventClearInput({
                "event": event,
                "targetEvt": targetEvt,
                "targetInput": targetInput,
                "value": inputValue,
                "data": inputData,
                "validation":this.state.validation
            })
        });
    }

    /**
     * validate input feild
     * @param event
     */
    _validateFields(targetEvt: any, clearInputEvt?: any) {
        let validations: any = null;
        let val: any = null;
        if (clearInputEvt) {
            validations = (clearInputEvt.parentElement.previousElementSibling.dataset.validations.replace(/\s/g, '')).split("|");
            val = clearInputEvt.parentElement.previousElementSibling.value;
        } else {
            validations = (targetEvt.dataset.validations.replace(/\s/g, '')).split("|");
            val = targetEvt.value;
        }

        if (validations.includes('required')) {
            if (val && typeof (val) == "string" && validations.length > 1) {
                return this._applyRegxRules(validations, val)
            } else {
                return val && typeof (val) == "string" ? { isValid: true, isDirty: true, message: '' } : { isValid: false, isDirty: true, message: DefaultMessages['required'] }
            }
        } else {
            if (val && typeof (val) == "string") {
                return this._applyRegxRules(validations, val);
            } else {
                return { isValid: true, isDirty: true, message: '' }
            }
        }
    }

    /**
     * apply rules, to input texts 
     * @param validations
     * @param val
     */
    _applyRegxRules(validations: any, val: string) {
        for (var i in validations) {
            if (validations[i] != 'required') {
                let onValidate = this._validateRegx(val, validations[i])
                if (!onValidate.isValid) {
                    return onValidate
                }
            }
        }
        return { isValid: true, isDirty: true, message: '' }
    }

    /**
     * validate and compare input with regx asssigned
     * @param val
     * @param rules
     */
    _validateRegx(val: string, rules: string) {
        let regex = new RegExp(Rules[rules]);
        let message = DefaultMessages[rules];
        let isValid = regex.test(val);
        let isDirty = true;
        return { isValid, isDirty, message }
    }

    /**
     * change on input event
     * @param event
     */
    _inputChanged(event: any) {
        let evt = event;
        let targetEvt = event.target;
        let inputValue = evt.target.value;
        let inputData = evt.target.dataset.params;
        if (this.state.validation.isDirty) {
            this.setState({
                validation: this._validateFields(targetEvt)
            }, function () {
                console.log(this.state.validation);
                this.props.eventChange({
                    "event": evt,
                    "targetEvt": targetEvt,
                    "value": inputValue,
                    "data": inputData,
                    "validation": this.state.validation
                });
            });
        }
    }

    /**
     * on key up event
     * @param event
     */
    _keyPressed(event: any) {
        let evt = event;
        let targetEvt = event.target;
        let inputValue = evt.target.value;
        let inputData = evt.target.dataset.params;
        if (this.state.validation.isDirty) {
            this.setState({
                validation: this._validateFields(targetEvt)
            }, function () {
                console.log(this.state.validation);
                this.props.eventChange({
                    "event": evt,
                    "targetEvt": targetEvt,
                    "value": inputValue,
                    "data": inputData,
                    "validation": this.state.validation
                });
            });
        }
    }

    /**
    * event on blur of output
    * @param event
    */
    _validateOnFocusOut(event: any) {
        let evt = event;
        let targetEvt = event.target;
        let inputValue = evt.target.value;
        let inputData = evt.target.dataset.params;
        this.setState({
            validation: this._validateFields(targetEvt)
        }, function () {
            console.log(this.state.validation);
            this.props.eventBlur({
                "event":evt,
                "targetEvt": targetEvt,
                "value": inputValue,
                "data": inputData,
                "validation": this.state.validation
            });
        });
    }

    /**
     * React utility method to render jsx 
     */
    render(): React.ReactElement<IInputboxProps> {
        const template = (
            <div className="input_block text-left">
                <div className={this.props.showLabelLeft ? "label_left " + this.props.customLeftLabelStyle : "hide_block"}>
                    <label className={this.state.validation && this.state.validation['isValid'] ? "input_left_label" : this.state.validation && !this.state.validation['isValid']  && this.props.highlightLabelError ? "input_left_label input_error" : "input_left_label"}>{this.props.inputLabel}</label>
                </div>
                <div className={this.props.showLabelLeft ? "clearable-input input_with_left_label" : "clearable-input"}>
                    <div className={this.props.showLabelTop ? "label_top " + this.props.customTopLabelStyle : "hide_block"}>
                        <label className={this.state.validation && this.state.validation['isValid'] ? "input_top_label" : this.state.validation && !this.state.validation['isValid'] && this.props.highlightLabelError ? "input_top_label input_error" : "input_top_label"}>{this.props.inputLabel}</label>
                    </div>
                    <input
                        type="text"
                        onChange={this._inputChanged}
                        onKeyUp={this._keyPressed}
                        onBlur={this._validateOnFocusOut}
                        placeholder={this.props.placeHolder}
                        data-params={this.props.data}
                        data-validations={this.props.validations}
                        className={this.state.validation && this.state.validation['isValid'] && this.state.validation['isDirty'] && this.props.highlightInputError ? "input_valid " + this.props.customInputStyle : this.state.validation && !this.state.validation['isValid'] && this.state.validation['isDirty'] && this.props.highlightInputError ? "input_inValid " + this.props.customInputStyle : "" + this.props.theme +" " + this.props.customInputStyle}/>
                    <span className={this.props.showClearButton ? "clear_input " + this.props.theme : "hide_block"} >
                        <i className="glyphicon glyphicon-remove-circle" onClick={this._clearInput}></i>
                    </span>
                    <div className={this.props.hideErrors ? "hide_block" : "error_block"}>
                        <div className={this.state.validation && this.state.validation['isValid'] ? "hide_block" : "input_error"}>
                            <i className="glyphicon glyphicon-alert"></i>
                            <span className="error_message">{this.state.validation ? this.state.validation.message : ""}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
        return template;
    }
}