import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export default function DateCalender(props: any) {
  // ** today Time ////////////////////////////////

  const date = new Date();

  const yearOfDate = date.getFullYear();
  const monthOfDate = date.getMonth() + 1;
  const dayOfMonth = date.getDate();

  const together = [yearOfDate, monthOfDate, dayOfMonth].join("/");
  const together2 = [yearOfDate, monthOfDate, dayOfMonth].join("-");

  let theme: PaletteMode;
  if (props.theme === "night") {
    theme = "dark";
  } else {
    theme = "light";
  }
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

        {/*// ** dialog /////////////////////*/}

        <dialog id="dateCalendar" className="modal">
          <div className="modal-box w-fit">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem label="readOnly">
                <DateCalendar defaultValue={dayjs(together2)} readOnly />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
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
