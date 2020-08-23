import * as React from "react";
import { createContext, useContext } from "react";
import { IInputs } from "./generated/ManifestTypes";
import { IAppProps } from "./App";
import {IAppointmentItemProps} from './interfaces'


export interface IAppContext {
    componentContext: ComponentFramework.Context<IInputs>;
    date: Date,
    setDate: React.Dispatch<React.SetStateAction<Date>>,
    loaded?: boolean,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>
    records: IAppointmentItemProps[],
    setRecords: React.Dispatch<React.SetStateAction<IAppointmentItemProps[]>>
;}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProps> = (props) => {
    const {componentContext} = props;
    const [date, setDate] = React.useState(new Date())
    const [loaded, setLoaded] = React.useState(false)
    const [records, setRecords] = React.useState<IAppointmentItemProps[]>([]);
    return (
        <AppContext.Provider value={{componentContext, date, setDate, loaded, setLoaded, records, setRecords}}>
            {props.children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext);
