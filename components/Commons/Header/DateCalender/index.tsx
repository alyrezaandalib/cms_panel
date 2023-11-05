import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { IoClose } from "react-icons/io5";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function DateCalender() {
  // ** today Time ////////////////////////////////

  const date = new Date();

  const yearOfDate = date.getFullYear();
  const monthOfDate = date.getMonth() + 1;
  const dayOfMonth = date.getDate();

  const together = [yearOfDate, monthOfDate, dayOfMonth].join("/");
  const together2 = [yearOfDate, monthOfDate, dayOfMonth].join("-");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={"hidden lg:block"}>
        <button className={""} onClick={() => window.dateCalendar.showModal()}>
          {together}
        </button>
        <dialog id="dateCalendar" className="p-10 rounded-2xl">
          <button onClick={() => window.dateCalendar.close()}>
            <IoClose className={"text-red-500 text-2xl mb-3"} />
          </button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label="readOnly">
              <DateCalendar defaultValue={dayjs(together2)} readOnly />
            </DemoItem>
          </LocalizationProvider>
        </dialog>
      </div>
    </ThemeProvider>
  );
}

declare global {
  interface Window {
    dateCalendar: any;
  }
}
