"use client";
import React, { useState } from "react";
import QuillEditor from "./editor";
import SelectImage from "@/components/posts/AddNew/selectImage";
import ChipInput from "@/components/posts/AddNew/ChipInput";

export default function AddNew() {
  const [content, setContent] = useState<string>("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={"w-full flex justify-center items-start"}
    >
      <div className={"w-[74%] mr-2"}>
        {/*// ** post title ////////////////////////////////////////*/}

        <div
          className={
            "flex justify-center items-center bg-secondary w-full rounded-lg h-20 px-5"
          }
        >
          <input
            className={"input bg-accent/10 w-full text-xl"}
            placeholder={"TITLE..."}
          />
        </div>

        {/*// ** post body ////////////////////////////////////////*/}

        <div className={"bg-secondary w-full my-2 rounded-lg h-[35.7rem]"}>
          <QuillEditor content={content} onChange={handleEditorChange} />
        </div>
      </div>
      {/*// ** sideBar ////////////////////////////////////////*/}

      <div
        className={
          "bg-secondary w-[20%] h-fit rounded-lg p-6 text-[16px] overflow-y-auto"
        }
      >
        {/*// ** buttons */}
        <div className={"flex flex-col"}>
          <button className={"mb-2 btn bg-accent text-xs"}>save</button>
          <button className={"btn text-accent btn-outline text-xs"}>
            move to draft
          </button>
        </div>
        {/*// ** description */}
        <div className={"my-5"}>
          <p>Short Description*</p>
          <textarea
            className={"mt-2 bg-accent/20 w-full min-h-[120px] input p-2"}
          ></textarea>
        </div>
        {/*// ** category */}
        <div className={"my-5"}>
          <p>Category</p>
          <select className={`input select bg-accent/20 mt-2 w-full`}></select>
        </div>
        {/*// ** tag */}
        <div className={"my-5"}>
          <p className={"mb-3"}>Tags</p>
          {/*/>*/}
          <ChipInput />
        </div>
        <div className="flex items-center justify-center w-full"></div>
        {/*// ** select Image */}
        <div className={"mt-5"}>
          <p className={"mb-3"}>Select Image</p>
          <SelectImage />
        </div>
        <div className="flex items-center justify-center w-full"></div>
      </div>
    </form>
  );
}
