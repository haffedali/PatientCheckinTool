import * as React from "react";
import { AppointmentDatePicker } from "./AppointmentDatePicker";
import { ListContainer } from "./ListContainer";
import { IAppointmentItemProps, IListProps, } from "../../interfaces";
import { useAppContext } from "../../AppContext";
import { buildClientWebApiOptions, IQueryObj } from "../../util";




export const PatientCheckinTool: React.FC = () => {
    const appContext = useAppContext();
    return (
        <div className={"pcf_container"}>
            {
                React.useEffect(() => {
                    console.log("useEffect")
                    if (!appContext.loaded) {
                        const testPayload: IQueryObj = {
                            select: ["name"]
                        }
                        const options = buildClientWebApiOptions(testPayload)
                        // props.componentContext.webAPI.retrieveMultipleRecords("contacts", options)
                        fetch("http://patientcheckintest.azurewebsites.net/api/patientone")
                            .then((res) => res.json())
                            .then((res) => {
                                console.log(res)
                                appContext.setLoaded(true)
                                res.forEach((record: IAppointmentItemProps)=>{
                                    let newDate = new Date(record.date);
                                    record.date = newDate.toLocaleTimeString();
                                })
                                appContext.setRecords(res)
                            }, (err) => console.log(err))
                    }
                }, [])
            }
            <div className={"patient_checkin_tool_container"}>
                <div className={"date_picker"}>
                    <AppointmentDatePicker />
                </div>
                <div className={"appointment_list"}>
                    <ListContainer items={appContext.records} />
                </div>
            </div>
        </div>)
};
