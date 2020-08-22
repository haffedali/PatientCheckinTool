import * as React from "react";
import { IInputs } from "./generated/ManifestTypes";
import { AppProvider } from "./AppContext";
import {PatientCheckinTool} from "./components/PatientCheckinTool"



const dummyData = [
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Vivian Tran",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Alex Vlavianos",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Montgomery Woodstock",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Tiphanie Eglano",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Chuck Testa",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Bill Robinson",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Rick Astley",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Timothy De",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Lala Geto",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Hiroku Express",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Node Sharp",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Dynamiques Treesixfy",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Misty Brocker",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Ash Ketchum",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Girl Garden",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Olliver Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Giovani Matrix",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Quick Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "May Twent",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Delivert Berty",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Moses Ali",
    guid: '123'
  },

  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Greg Tano",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Hella Copies",
    guid: '123'
  },
];

const dummyData2 = [
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Vivian Tran",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Alex Vlavianos",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Montgomery Woodstock",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Tiphanie Eglano",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Chuck Testa",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Bill Robinson",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Rick Astley",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Timothy De",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Lala Geto",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Hiroku Express",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Node Sharp",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Dynamiques Treesixfy",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Misty Brocker",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Ash Ketchum",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Girl Garden",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Olliver Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Giovani Matrix",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "Quick Ali",
    guid: '123'
  },
  {
    date: "01/03/2020",
    name: "May Twent",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Delivert Berty",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Moses Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },

  {
    date: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Greg Tano",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    date: "01/03/2020",
    name: "Hella Copies",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
];


export interface IAppProps {
  componentContext: ComponentFramework.Context<IInputs>;
}


export const App: React.FC<IAppProps> = (props: IAppProps) => {
  let loaded = false;
  return (
    <AppProvider {...props}>
      <PatientCheckinTool />
    </AppProvider>
  )
};
