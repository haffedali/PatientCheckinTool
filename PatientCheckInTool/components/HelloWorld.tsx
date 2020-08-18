import * as React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import { PatientCheckinTool } from "./PatientCheckinTool/index";

const dummyData = [
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Vivian Tran",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Alex Vlavianos",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Montgomery Woodstock",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Tiphanie Eglano",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Chuck Testa",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Bill Robinson",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Rick Astley",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Timothy De",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Lala Geto",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Hiroku Express",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Node Sharp",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Dynamiques Treesixfy",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Misty Brocker",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Ash Ketchum",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Girl Garden",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Olliver Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Giovani Matrix",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Quick Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "May Twent",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Delivert Berty",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Moses Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },

  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Greg Tano",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    name: "Hella Copies",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
];

export const HelloWorld: React.FC<{}> = (props) => {
  // const {text, handleClick, icon} = props
  const date = useContext(Context);
  return (
    <div className={"pcf_container"}>
      <Context.Provider value={{ date: "9/1/2019" }}>
        {/* <AppointmentDatePicker /> */}
        <PatientCheckinTool />
      </Context.Provider>
    </div>
    // <div><Button icon="MessageFill" text="Hello" handleClick={()=>console.log("World")}/></div>
  );
};
