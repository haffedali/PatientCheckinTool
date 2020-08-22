import * as React from "react";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ICheckBoxProps } from "../interfaces";

export const CheckBox: React.FC<ICheckBoxProps> = ({handleClick}) => {

    const [isChecked, setIsChecked] = React.useState(false);
    const onChange = React.useCallback(
        (ev: React.FormEvent<HTMLElement | HTMLInputElement> | undefined , newChecked: boolean | undefined) => {
            if (newChecked !== undefined){
                setIsChecked(newChecked)
            }
            handleClick();
        }, []
    )
    return (<div>
        <Checkbox checked={isChecked} onChange={onChange}/>
    </div>)
}