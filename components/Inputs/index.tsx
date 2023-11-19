import { ErrorMessage, Field } from "formik";
import * as React from "react";

export default function Inputs({ label, type = "text", name, id, as }: any) {
  return (
    <div className={"flex flex-col flex-1 mx-2 h-full"}>
      <label className="label">
        <span className="label-text whitespace-nowrap">{label}</span>
      </label>
      <Field
        as={as}
        type={type}
        className={`input bg-base-200 relative ${
          as === "textarea" ? "h-28 w-[78vw] xl:w-[38.6vw]" : "w-[78vw]  xl:w-[18vw]"
        }`}
        id={id}
        name={name}
      />
      <ErrorMessage
        name={name}
        component={"div"}
        className={"text-error text-xs mb-1 mr-0.5 mt-1"}
      />
    </div>
  );
}
