import * as React from "react";
import AzureAD, {
  MsalAuthProvider,
  IAzureADFunctionProps,
} from "react-aad-msal";
import { IInputs } from "./generated/ManifestTypes";
import { AppointmentDatePicker } from "./components/PatientCheckinTool/AppointmentDatePicker";
import { ListContainer } from "./components/PatientCheckinTool/ListContainer";
import { AppProvider } from "./AppContext";

const dummyData = [
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Vivian Tran",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Alex Vlavianos",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Montgomery Woodstock",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Tiphanie Eglano",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Chuck Testa",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Bill Robinson",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Rick Astley",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Timothy De",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Lala Geto",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Hiroku Express",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Node Sharp",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Dynamiques Treesixfy",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Misty Brocker",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Ash Ketchum",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Girl Garden",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Olliver Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Giovani Matrix",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Quick Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "May Twent",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Delivert Berty",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Moses Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },

  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Greg Tano",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Haffed Ali",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
  {
    time: "01/03/2020",
    name: "Hella Copies",
    onMessageButtonClick: () => console.log("sending mesage"),
    onCheckBoxClick: () => console.log("checkbox clicked"),
  },
];

export interface IAppProps {
  componentContext: ComponentFramework.Context<IInputs>;
  msalAuthProvider: MsalAuthProvider;
  forceLogin: boolean;
}

export const App: React.FC<IAppProps> = (props: IAppProps) => {
  const [forceLogin, setForceLogin] = React.useState(props.forceLogin);

  return (
    <AppProvider {...props}>
      <AzureAD provider={props.msalAuthProvider} forceLogin={forceLogin}>
        {({ error, accountInfo }: IAzureADFunctionProps) => {
          if (error && forceLogin == true) {
            setForceLogin(false);
          }
          return (
            <React.Fragment>
              {error && <div>error login in</div>}
              <div className={"pcf_container"}>
                <div className={"patient_checkin_tool_container"}>
                  <div className={"date_picker"}>
                    <AppointmentDatePicker />
                  </div>
                  <div className={"appointment_list"}>
                    <ListContainer items={dummyData} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </AzureAD>
    </AppProvider>
  );
};
