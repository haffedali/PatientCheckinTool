import * as React from 'react';
import { DatePicker, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';
import {IAppointmentDatePicker} from '../../interfaces';
import {useAppContext} from "../../AppContext";

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});



export const AppointmentDatePicker: React.FC<IAppointmentDatePicker> = (props) => {
  const appContext = useAppContext();
  const date = new Date();
  const handleChange = (date: Date| null| undefined)=> {
    if (date){
      appContext.setDate(date)
    }
  }
  
  return (
    <div>
      <DatePicker
        className={controlClass.control}
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        onSelectDate={handleChange}
        value={date}
      />
    </div>
  );
};