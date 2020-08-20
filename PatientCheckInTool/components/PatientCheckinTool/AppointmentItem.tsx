import * as React from "react";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";
import {AppContext} from '../../AppContext';
import { IAppointmentItemProps } from "../../interfaces";


export const AppointmentItem: React.FC<IAppointmentItemProps> = ({name, onMessageButtonClick, onCheckBoxClick}) => {
  return (
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
  );
};
