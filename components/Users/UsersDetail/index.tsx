"use client";
// import getData from "@/services/server/get-data/get-data";
// import {baseURL} from "@/meta/_baseURL";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Chip from "@mui/material/Chip";
import { usersListRow } from "@/JsonFiles/usersList";

export default function UsersViewPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = usersListRow.find(
      (item) => item.id === Number(params.id),
    );
    setData(fetchData);
  }, []);
  return (
    <div
      className={
        "bg-primary rounded-tl-3xl mt-[80px] flex justify-center items-center"
      }
      style={{ overflowY: "auto", height: "calc(100vh - 4rem)" }}
    >
      <div className={"flex flex-col p-10 w-full"}>
        <div
          className={"flex flex-row w-full justify-start items-center mt-20"}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              router.back();
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant={"h6"}>User details</Typography>
        </div>
        <div
          className={
            "flex flex-col w-full flex-1 justify-start items-start bg-base-200 rounded-lg p-3 mt-6"
          }
        >
          <div className={"flex flex-row flex-1 justify-start items-center"}>
            <p id={"created-at"}>
              {data.is_active ? (
                <CheckOutlinedIcon className={"text-success"} />
              ) : (
                <CloseOutlinedIcon className={"text-error"} />
              )}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 text-xs ml-1"}
            >
              Active
            </label>

            <p id={"created-at"}>
              {data.is_super ? (
                <CheckOutlinedIcon className={"text-success ml-8"} />
              ) : (
                <CloseOutlinedIcon className={"text-error ml-8"} />
              )}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 text-xs ml-1"}
            >
              Super
            </label>

            <p id={"created-at"}>
              {data.is_admin ? (
                <CheckOutlinedIcon className={"text-success ml-8"} />
              ) : (
                <CloseOutlinedIcon className={"text-error ml-8"} />
              )}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 text-xs ml-1"}
            >
              Admin
            </label>

            <p id={"created-at"}>
              {data.is_staff ? (
                <CheckOutlinedIcon className={"text-success ml-8"} />
              ) : (
                <CloseOutlinedIcon className={"text-error ml-8"} />
              )}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 text-xs ml-1"}
            >
              Staff
            </label>
          </div>
        </div>
        <div
          className={
            "flex flex-row w-full flex-1 justify-start mt-4 items-start bg-base-200 rounded-lg p-3"
          }
        >
          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 text-gray-200 mb-6"}
              style={{ borderBottom: "1px solid gray" }}
            >
              CRUD Information
            </h6>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
            >
              Created at:
            </label>
            <p id={"created-at"}>
              {data.created_at ? data.created_at : "- - - -"}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Created by:
            </label>
            <p id={"created-at"}>
              {data.created_by ? data.created_by : "- - - -"}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Updated at:
            </label>
            <p id={"created-at"}>
              {data.updated_at ? data.updated_at : "- - - -"}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Updated by:
            </label>
            <p id={"created-at"}>
              {data.updated_by ? data.updated_by : "- - - -"}
            </p>
          </div>
          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 text-gray-200 mb-6"}
              style={{ borderBottom: "1px solid gray" }}
            >
              Personal
            </h6>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
            >
              First Name:
            </label>
            <p id={"created-at"}>
              {data.first_name ? data.first_name : "- - - -"}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Last Name:
            </label>
            <p id={"created-at"}>
              {data.last_name ? data.last_name : "- - - -"}
            </p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Gender:
            </label>
            <p id={"created-at"}>{data.gender ? data.gender : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Birthday:
            </label>
            <p id={"created-at"}>{data.birthday ? data.birthday : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              State:
            </label>
            <p id={"created-at"}>{data.state ? data.state : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Town:
            </label>
            <p id={"created-at"}>{data.town ? data.town : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Address:
            </label>
            <p id={"created-at"}>{data.address ? data.address : "- - - -"}</p>
          </div>

          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 text-gray-200 mb-6"}
              style={{ borderBottom: "1px solid gray" }}
            >
              Account
            </h6>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
            >
              Ex Code:
            </label>
            <p id={"created-at"}>{data.code ? data.code : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              User Code:
            </label>
            <p id={"created-at"}>{data.usr_code ? data.usr_code : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              User Name:
            </label>
            <p id={"created-at"}>{data.usr_name ? data.usr_name : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Password:
            </label>
            <p id={"created-at"}>* * * * * * * * * *</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Email:
            </label>
            <p id={"created-at"}>{data.email ? data.email : "- - - -"}</p>
            <label
              htmlFor={"created-at"}
              className={"whitespace-nowrap text-gray-400 my-2 text-xs"}
            >
              Phone number:
            </label>
            <p id={"created-at"}>
              {data.phone_number ? data.phone_number : "- - - -"}
            </p>
          </div>
        </div>
        <div
          className={
            "flex flex-col w-full mt-4 flex-1 justify-start items-start bg-base-200 rounded-lg p-3 pb-6"
          }
        >
          <h6
            className={"mr-5 text-gray-200 mb-6"}
            style={{ borderBottom: "1px solid gray" }}
          >
            Roles
          </h6>
          <div className={"flex flex-row w-full justify-start items-center"}>
            <div id={"created-at"}>
              {data.roles
                ? data.roles.map((item: any, index: number) => {
                    return (
                      <Chip
                        key={index}
                        label={item.name}
                        size="small"
                        variant="outlined"
                        className={"mx-1 text-neutral"}
                      />
                    );
                  })
                : "- - - -"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
