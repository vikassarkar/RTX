export interface ICollapseProps {
    defaultOpen: boolean;
    cutomCollapseLableStyle: string;
    customDescriptionStyle: string;
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
    childCollapsible: any;
}

export interface ICollapseStates {
    isOpened: boolean;
}