import * as React from "react";
import { AppointmentDatePicker } from "./AppointmentDatePicker";
import { ListContainer } from "./ListContainer";
import { IAppointmentItemProps, IListProps } from "../../interfaces";
import { useAppContext } from "../../AppContext";
import { buildClientWebApiOptions, IQueryObj, subDayFromISODateString } from "../../utils";

export const PatientCheckinTool: React.FC = () => {
  const appContext = useAppContext();
  return (
    <div className={"pcf_container"}>
      {React.useEffect(() => {
        console.log("useEffect fired!!!!");
        const currentDate = new Date()
        const isoDate: string = appContext.date.toISOString().slice(0, 10);
        const isoDateYesterday: string = subDayFromISODateString(isoDate);
        appContext.setLoaded(false);
        appContext.setRecords([]);
        const testPayload: IQueryObj = {
          select: ["subject", "hoff_name", "scheduledstart", "scheduledend"],
          orderBy: [{field: "scheduledstart", suffix: "desc"}],
          filter: [
            { field: "scheduledstart", value: isoDate, operation: "le" },
            { field: "scheduledstart", value: isoDateYesterday, operation: "gt" },
          ],
        };
        const options = buildClientWebApiOptions(testPayload)
        appContext.componentContext.webAPI.retrieveMultipleRecords("appointment", options)
            .then(
                (res)=>{
                    console.log(`plain response ${res}`)
                    const parsedResponse: IAppointmentItemProps[] = [];
                    res.entities.forEach((x:any) => {
                        console.log(`entity loop ${x}`)
                        let {scheduledstart, scheduledend, hoff_name, subject} = x;
                        let appointmentItem: IAppointmentItemProps = {
                            scheduledEnd: scheduledend,
                            scheduledStart: scheduledstart,
                            name: hoff_name,
                            subject
                        }
                        console.log(`IappointmentProps ${appointmentItem}`)
                        parsedResponse.push(appointmentItem)
                    })
                    appContext.setLoaded(true);
                    appContext.setRecords(parsedResponse);
                },
                (err) => console.log(err)
            )
            

        console.log(options)

        // if (appContext.date.toLocaleDateString() === currentDate.toLocaleDateString()) {
        //   fetch("http://patientcheckintest.azurewebsites.net/api/patientone")
        //     .then((res) => res.json())
        //     .then(
        //       (res) => {
        //         console.log(res);
        //         appContext.setLoaded(true);
        //         res.forEach((record: IAppointmentItemProps) => {
        //           let newDate = new Date(record.scheduledStart);
        //           record.scheduledStart = newDate.toLocaleTimeString();
        //         });
        //         appContext.setRecords(res);
        //       },
        //       (err) => console.log(err)
        //     );
        // } else {
        //   fetch("http://patientcheckintest.azurewebsites.net/api/patienttwo")
        //     .then((res) => res.json())
        //     .then(
        //       (res) => {
        //         console.log(res);
        //         appContext.setLoaded(true);
        //         res.forEach((record: IAppointmentItemProps) => {
        //           let newDate = new Date(record.scheduledStart);
        //           record.scheduledStart = newDate.toLocaleTimeString();
        //         });
        //         appContext.setRecords([]);
        //       },
        //       (err) => console.log(err)
        //     );
        // }
      }, [appContext.date])}
      <div className={"patient_checkin_tool_container"}>
        <div className={"date_picker"}>
          <AppointmentDatePicker />
        </div>
        <div className={"appointment_list"}>
          <ListContainer items={appContext.records} />
        </div>
      </div>
    </div>
  );
};
