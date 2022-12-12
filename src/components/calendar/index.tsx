// Add Calendar
import Calendar from "react-calendar";
import { ChangeEvent, useState } from "react";
import { DateTime } from "luxon";

type AppCalendar = {
  currentDate: string;
  onChangeDate: (value:Date) => void;
};

type OnChangeDateCallback = {value: Date, event: ChangeEvent<HTMLInputElement>}

export default function AppCalendar({ currentDate, onChangeDate }: AppCalendar) {
  const [date, setDate] = useState(new Date(currentDate));

  const tileDisabled = ({ activeStartDate, date, view }) => {
    const tileDate = DateTime.fromJSDate(date).setLocale("es-CL");
    const currentDate = DateTime.now().setLocale("es-CL");

    console.log({ tileDate, currentDate, diff: tileDate.diff(currentDate, 'day').days })

    return Math.ceil(tileDate.diff(currentDate, 'day').days) < 0;
 }

  const selectDate = (date: OnChangeDateCallback | any) => {
    onChangeDate(date);
    setDate(date.value);
  }

  return <Calendar onChange={selectDate} value={date} activeStartDate={date} tileDisabled={tileDisabled}/>;
}
