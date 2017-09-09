export interface IInputboxProps {
    inputLabel: string;
    showLabelLeft: boolean;
    showLabelTop: boolean;
    placeHolder: string;
    hideErrors: boolean;
    theme: string;
    validations: string;
    highlightInputError: boolean;
    highlightLabelError: boolean;
    customInputStyle: string;
    customTopLabelStyle: string;
    customLeftLabelStyle: string;
    showClearButton: boolean;
    eventChange: any;
    eventKeypress: any;
    eventBlur: any;
    eventClearInput: any;
    data: any;
}

export interface IInputboxStates {
    validation: any;
}