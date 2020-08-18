import * as React from "react";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ICheckBoxProps } from "../interfaces";

export const CheckBox: React.FC<ICheckBoxProps> = ({handleClick}) => {
    const [isIndeterminate, setIsIndeterminate] = React.useState(true);
    const [isChecked, setIsChecked] = React.useState(false);
    const onChange = React.useCallback(
        (ev: React.FormEvent<HTMLElement | HTMLInputElement> | undefined , newChecked: boolean | undefined) => {
            console.log(newChecked) 
            if (newChecked !== undefined){
                if (isIndeterminate){
                    setIsIndeterminate(false);
                } else {
                    setIsChecked(newChecked);
                }
            }
            handleClick("test");
        }, [isIndeterminate]
    )
    return (<div>
        <Checkbox indeterminate={isIndeterminate} checked={isChecked} onChange={onChange}/>
    </div>)
}