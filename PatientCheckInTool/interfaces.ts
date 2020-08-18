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
    name: string;
    onMessageButtonClick: (arg: any) => void;
    onCheckBoxClick: (arg: any) => void;
}

export interface IListProps {
    items: IAppointmentItemProps[];
}