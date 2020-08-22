import * as React from "react";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";
import {AppContext} from '../../AppContext';
import { IAppointmentItemProps } from "../../interfaces";


export const AppointmentItem: React.FC<IAppointmentItemProps> = ({name, date, guid}) => {
  const handleMessageButtonClick = () => {
    console.log(`message ${name}`);
  };

  const handleCheckBoxClick = () => {
    console.log(`person with id ${guid}`)
  }

  return (
    <div className={"appointment_item"}>
      <div>{date}</div>
      <div className={"patient_name"}>{name}</div>
      <div className={"appointment_item_buttons"}>
        <div className={"attendance_button"}>
          <CheckBox handleClick={handleCheckBoxClick}/>

        </div>
        <div className={"reminder_button"}>
          <Button
            icon={"MessageFill"}
            handleClick={handleMessageButtonClick}
          />
        </div>
      </div>
    </div>
  );
};
