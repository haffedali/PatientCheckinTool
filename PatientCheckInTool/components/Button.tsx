import * as React from "react";
import {PrimaryButton, IconButton} from 'office-ui-fabric-react';
import {IButtonProps} from '../interfaces';

export const Button: React.FC<IButtonProps> = (props) => {
    const {text, handleClick, icon} = props

    if (icon){
        return(<div><IconButton iconProps={{iconName: icon}} title="Emoji" ariaLabel="Emoji" onClick={handleClick}/></div>)
    }else{
        return (<div><PrimaryButton text={text} onClick={handleClick}/></div>)
    }
}