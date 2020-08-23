import * as React from "react";
import { Text, ITextProps } from "office-ui-fabric-react/lib/Text";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";
import { AppContext } from "../../AppContext";
import { IAppointmentItemProps } from "../../interfaces";

export const AppointmentItem: React.FC<IAppointmentItemProps> = ({ name, date, guid }) => {
  const [checked, setChecked] = React.useState(false);
  const handleMessageButtonClick = () => {
    console.log(`message ${name}`);
  };

  const handleCheckBoxClick = () => {
    console.log(`person with id ${guid}`);
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const renderAppointmentTime = (date: string) => {
    let dateObj = new Date(date);
    let currentTime = new Date();

    if (dateObj.getTime() > currentTime.getTime() && checked) {
      console.log("green")
      return (
        <Text key={`date of ${guid}`} variant={"mediumPlus"} style={{ backgroundColor: "#80ff80" }}>
          {date}
        </Text>
      );
    } else if (dateObj.getTime() < currentTime.getTime() && !checked) {
      console.log("red")
      return (
        <Text key={`date of ${guid}`} variant={"mediumPlus"} style={{ backgroundColor: "#ff6666" }}>
          {date}
        </Text>
      );
    } else {
      console.log("white")

      return (
        <Text key={`date of ${guid}`} variant={"mediumPlus"}>
          {date}
        </Text>
      );
    }
  };
  return (
    <div className={"appointment_item"}>
      <div>{renderAppointmentTime(date)}</div>
      <div className={"patient_name"}>
        <Text key={`name of ${guid}`} variant={"mediumPlus"}>
          {name}
        </Text>
      </div>
      <div className={"appointment_item_buttons"}>
        <div className={"attendance_button"}>
          <CheckBox handleClick={handleCheckBoxClick} />
        </div>
        <div className={"reminder_button"}>
          <Button icon={"MessageFill"} handleClick={handleMessageButtonClick} />
        </div>
      </div>
    </div>
  );
};
