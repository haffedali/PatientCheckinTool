import * as React from "react";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import {Context} from '../Context';
import { IAppointmentItemProps } from "../interfaces";


export const AppointmentItemContainer: React.FC<IAppointmentItemProps> = ({name, onMessageButtonClick, onCheckBoxClick}) => {
  return (
    <Context.Provider value={{}}>
    <div className={"appointment_item"}>
      <div className={"patient_name"}>{name}</div>
      <div className={"appointment_item_buttons"}>
        <div className={"attendance_button"}>
          <CheckBox handleClick={onCheckBoxClick}/>

        </div>
        <div className={"reminder_button"}>
          <Button
            icon={"MessageFill"}
            handleClick={onMessageButtonClick}
          />
        </div>
      </div>
    </div>
    </Context.Provider>
  );
};
