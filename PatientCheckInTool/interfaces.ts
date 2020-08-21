import { CacheLocation } from "msal";

export interface IButtonProps {
    text?: string;
    handleClick: (arg:any) => void;
    icon?: string; 
}

export interface IIconProps {
    iconString: string;
}

export interface ICheckBoxProps {
    handleClick: (arg:any) => void;
}

export interface IAppointmentItemProps {
    time: string,
    name: string;
    onMessageButtonClick: (arg: any) => void;
    onCheckBoxClick: (arg: any) => void;
}

export interface IListProps {
    items: IAppointmentItemProps[];
}

export interface IConfig {
    appId: string;
    appRedirectUrl: string;
    appScopes: string[];
    appAuthority: string;
    cacheLocation: CacheLocation;
}

export interface ISecureRecord {
    id: string;
    name: string;
    value: string;
    modified: Date;
}