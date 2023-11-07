import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { IoClose } from "react-icons/io5";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { PaletteMode } from "@mui/material";

type themeType = {
  theme: string | RequestCookie | undefined;
};

export default function DateCalender(props: any) {
  // ** today Time ////////////////////////////////

  const date = new Date();

  const yearOfDate = date.getFullYear();
  const monthOfDate = date.getMonth() + 1;
  const dayOfMonth = date.getDate();

  const together = [yearOfDate, monthOfDate, dayOfMonth].join("/");
  const together2 = [yearOfDate, monthOfDate, dayOfMonth].join("-");

  let theme: PaletteMode;
  console.log(typeof props.theme);
  console.log(props.theme);
  if (props.theme === "night") {
    theme = "dark";
  } else {
    theme = "light";
  }
  console.log("current", theme);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
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
