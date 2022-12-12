// Add Calendar
import { DateTime } from "luxon";
import dynamic from "next/dynamic";
import { useState } from "react";
import useSWR from "swr";
import AvailableHours from "../components/available-hours";
import { AvaliableHourResponse } from "../interfaces";
import fetcher from "../utils/fetcher";

type AppCalendar = {
  currentDate: string;
};

const AppCalendar = dynamic(() => import("../components/calendar"), {
  ssr: false,
});

export default function Home({ currentDate }: AppCalendar) {
  const [date, setDate] = useState<Date | null>(null);

  const { data, isLoading, error } = useSWR<AvaliableHourResponse>(
    () => date ? "/api/available-hours?currentDate=" + date.toISOString() : null,
    fetcher
  );

  const getAvailableByDate = (date: Date) => {
    setDate(date);
  };

  const onChangeDate = (date: Date) => {
    console.log("selectedDate", date);
    getAvailableByDate(date);
  };

  return (
    <div className="app">
      <div className="calendar-container">
        <AppCalendar currentDate={currentDate} onChangeDate={onChangeDate} />
      </div>
      <div className="vet-container">
        <AvailableHours isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      currentDate: DateTime.now().setLocale("es-CL").toISO(),
    },
  };
}
