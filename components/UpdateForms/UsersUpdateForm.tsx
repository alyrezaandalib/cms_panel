"use client";
import * as React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { FormData } from "@/JsonFiles/Users/UsersFeild";
import Inputs from "@/components/Inputs";
import { Rules } from "@/JsonFiles/Users/UsersFeild";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/navigation";
// import sendLoginData from "@/services/server/send-login-data/send-login-data";
// import { enqueueSnackbar } from "notistack";
// import addData from "@/services/server/add-data/add-data";
// import {baseURL} from "@/meta/_baseURL";

export default function UserAddForm() {
  const [rule, setRule] = React.useState();

  const handleChange = (event: any) => {
    setRule(event.target.value);
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("This field is required"),
    last_name: Yup.string().required("This field is required"),
    usr_name: Yup.string().required("This field is required"),
    passwd: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    town: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    birthday: Yup.date().required("This field is required"),
    email: Yup.string().required("This field is required"),
    phone_number: Yup.string().required("This field is required"),
    roles: Yup.mixed().required("This field is required"),
  }).required();

  const initialValues = {
    first_name: "",
    last_name: "",
    usr_name: "",
    passwd: "",
    state: "",
    town: "",
    address: "",
    gender: "male",
    birthday: "",
    email: "",
    phone_number: "",
    roles: "",
  };

  const loginHandleSubmit = async (values: any) => {
    values.roles = rule;
    // if (await addData(`${baseURL}/authentication/admins`, values)) {
    //     enqueueSnackbar('Permission added successfully', {
    //         style: {
    //             borderColor: '#10a912',
    //             color: '#f2f2f2',
    //             backgroundColor: '#10a912'
    //         }
    //     })
    // } else {
    //     enqueueSnackbar('Could not create permission', {
    //         style: {
    //             borderColor: '#ef2b50',
    //             color: '#f2f2f2',
    //             backgroundColor: '#ef2b50'
    //         }
    //     })
    // }
  };

  return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={loginHandleSubmit}
      >
        <Form className={"w-full flex-row xl:flex justify-between"} id={"add-form"}>
          <div className={"w-full xl:w-[65%]"}>
            <div className={"flex flex-wrap"}>
              {FormData.map((item, index) => (
                  <Inputs
                      key={index}
                      label={item.label}
                      type={item.type}
                      name={item.name}
                      id={item.id}
                      as={item.as}
                  />
              ))}

              {/*// ** gender */}
              <div className={"flex flex-col ml-2 xl:mx-0 flex-1"}>
                <label className="label">
                  <span className="label-text whitespace-nowrap">Gender:</span>
                </label>
                <Field
                    className={`input bg-base-200 w-[78vw] xl:w-[18vw] px-1 `}
                    as="select"
                    id={"gender"}
                    name={"gender"}
                >
                  <option key={100} value={"male"}>
                    Male
                  </option>
                  <option key={1000} value={"female"}>
                    Female
                  </option>
                </Field>
                <ErrorMessage
                    name={"gender"}
                    component={"div"}
                    className={"text-error text-xs mb-1 mr-0.5 mt-1"}
                />
              </div>
            </div>
          </div>
          <FormControl className={"w-[30%] px-5 mt-10 xl:mt-0"}>
            <div className={"mb-3"}>Rule</div>
            <RadioGroup value={rule}>
              {Rules.map((item, index) => (
                  <FormControlLabel
                      onClick={handleChange}
                      key={index}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                  />
              ))}
            </RadioGroup>
          </FormControl>
        </Form>
      </Formik>
  );
}
