export interface ICollapseProps {
    defaultOpen: boolean;
    cutomCollapseLableStyle: string;
    customDescriptionStyle: string;
    customDescriptionTemplateStyle: string;
    showEndIcon: boolean;
    showStartIcon: boolean;
    startOpenIconClass: string;
    startCloseIconClass: string;
    endOpenIconClass: string;
    endCloseIconClass: string;
    customEndIconStyle: string;
    endIconTheme: string;
    customStartIconStyle: string;
    startIconTheme: string;
    childCollapsibleTemplate: any;
    eventToggle:any;
    data:string;
}

export interface ICollapseStates {
    isOpened: boolean;
}