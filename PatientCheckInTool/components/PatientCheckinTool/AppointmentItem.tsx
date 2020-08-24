import * as React from "react";
import { Text, ITextProps } from "office-ui-fabric-react/lib/Text";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";
import { AppContext } from "../../AppContext";
import { IAppointmentItemProps } from "../../interfaces";

export const AppointmentItem: React.FC<IAppointmentItemProps> = ({
  name,
  scheduledStart,
  subject,
}) => {
  const [checked, setChecked] = React.useState(false);
  const handleMessageButtonClick = () => {
    console.log(`message ${name}`);
  };

  const handleCheckBoxClick = () => {
    console.log(`person with id ${subject}`);
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const renderAppointmentTime = (scheduledStart: string | undefined) => {
    if (scheduledStart) {
      let dateObj = new Date(scheduledStart);
      let currentTime = new Date();

      if (dateObj.getTime() > currentTime.getTime() && checked) {
        console.log("green");
        return (
          <Text
            key={`scheduledStart of ${subject}`}
            variant={"mediumPlus"}
            style={{ backgroundColor: "#80ff80" }}
          >
            {scheduledStart}
          </Text>
        );
      } else if (dateObj.getTime() < currentTime.getTime() && !checked) {
        console.log("red");
        return (
          <Text
            key={`scheduledStart of ${subject}`}
            variant={"mediumPlus"}
            style={{ backgroundColor: "#ff6666" }}
          >
            {scheduledStart}
          </Text>
        );
      } else {
        console.log("white");

        return (
          <Text key={`scheduledStart of ${subject}`} variant={"mediumPlus"}>
            {scheduledStart}
          </Text>
        );
      }
    } else {
      return <div>neko neko neeeiii</div>;
    }
  };
  return (
    <div className={"appointment_item"}>
      <div>{renderAppointmentTime(scheduledStart)}</div>
      <div className={"patient_name"}>
        <Text key={`name of ${subject}`} variant={"mediumPlus"}>
          {name}
        </Text>
        <div></div>
        <Text key={`subject of ${name}`} variant={"mediumPlus"}>
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
