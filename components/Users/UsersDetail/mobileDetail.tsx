import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UsersDetail } from "@/JsonFiles/Users/UserseDetail";

export default function MobileDetail({ data }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        className={"bg-base-200 shadow-none text-neutral"}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>CRUD Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {UsersDetail.CRUD.map((item, index) => (
            <div key={index} className={"flex items-center text-xs my-1"}>
              <div className={"mr-2"}>{item.label}</div>
              <div> {data[item.value] ? data[item.value] : "- - - -"}</div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      {/*///////////////////////////////////////////////*/}
      <Accordion
        className={"bg-base-200 shadow-none text-neutral"}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Personal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {UsersDetail.Personal.map((item, index) => (
            <div key={index} className={"flex items-center text-xs my-1"}>
              <div className={"mr-2"}>{item.label}</div>
              <div> {data[item.value] ? data[item.value] : "- - - -"}</div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      {/*///////////////////////////////////////////////*/}
      <Accordion
        className={"bg-base-200 shadow-none text-neutral"}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {UsersDetail.Account.map((item, index) => (
            <div key={index} className={"flex items-center text-xs my-1"}>
              <div className={"mr-2"}>{item.label}</div>
              <div> {data[item.value] ? data[item.value] : "- - - -"}</div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
