import * as React from "react";
import { IInputs } from "./generated/ManifestTypes";
import { AppProvider } from "./AppContext";
import {PatientCheckinTool} from "./components/PatientCheckinTool"






export interface IAppProps {
  componentContext: ComponentFramework.Context<IInputs>;
}


export const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <AppProvider {...props}>
      <PatientCheckinTool />
    </AppProvider>
  )
};
