"use client";
import Sidebar from "../Commons/Sidebar/sidebarList";
import {sidebarItems} from "@/JsonFiles/menu&sidebar/SidebarLists";
import * as React from "react";

export default function Content(props: propsType) {
  const [open, setOpen] = React.useState(true);
  return (
    <div
      className={"flex flex-row flex-justify-start items-start"}
      style={{ overflowY: "clip" }}
    >
      {/*// ** sidebar*/}
      <Sidebar  items={sidebarItems} open={open}/>
      <section
        style={{ overflowY: "auto", height: "calc(100vh - 4rem)" }}
        className={
          "flex flex-col flex-grow xl:rounded-tl-3xl bg-primary h-screen p-4 lg:p-10 mt-[60px] xl:mt-[80px]"
        }
      >
        {props.content}
      </section>
    </div>
  );
}

interface propsType {
  content: any;
}
