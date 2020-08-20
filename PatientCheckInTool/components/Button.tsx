import * as React from "react";
import {PrimaryButton, IconButton} from 'office-ui-fabric-react';
import {IButtonProps} from '../interfaces';

export const Button: React.FC<IButtonProps> = (props) => {
    const {text, handleClick, icon} = props

    //temp for testing
    const tempHandleClick = () => {
        console.log("Button clicked")
    }
    if (icon){
        return(<div><IconButton iconProps={{iconName: icon}} title="Emoji" ariaLabel="Emoji" onClick={tempHandleClick}/></div>)
    }else{
        return (<div><PrimaryButton text={text} onClick={tempHandleClick}/></div>)
    }
}