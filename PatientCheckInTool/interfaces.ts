import { CacheLocation } from "msal";
import { MutableRefObject } from "react";

export interface IButtonProps {
    text?: string;
    handleClick: (arg:any) => void;
    icon?: string; 
}

export interface IIconProps {
    iconString: string;
}

export interface ICheckBoxProps {
    handleClick: () => void;
}

export interface IAppointmentItemProps {
    scheduledStart: string,
    scheduledEnd: string,
    name: string;
    subject: string
}

export interface IListProps {
    items: IAppointmentItemProps[] | [];
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

export interface IAppointmentDatePicker {
}