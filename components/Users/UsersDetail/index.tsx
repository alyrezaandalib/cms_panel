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
import { usersListRow } from "@/JsonFiles/Users/usersList";
import { UsersDetail } from "@/JsonFiles/Users/UserseDetail";
import MobileDetail from "@/components/Users/UsersDetail/mobileDetail";

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
    <div className={" flex justify-center"}>
      <div className={"flex flex-col w-[99%]"}>
        {/*// ** main Title ////////////////////////////////////////*/}

        <div className={"flex flex-row w-full justify-start items-center"}>
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

        {/*// ** roles ////////////////////////////////////////*/}

        <div
          className={
            "flex flex-col w-full flex-1 justify-start items-start bg-base-200 rounded p-3 mt-6"
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

        {/*// ** user info mobile ////////////////////////////////////////*/}
        <div className={"block xl:hidden w-full mt-4"}>
          <MobileDetail data={data} />
        </div>

        {/*// ** user info desktop ////////////////////////////////////////*/}

        <div
          className={
            "hidden xl:flex flex-row w-full flex-1 justify-start mt-4 items-start bg-base-200 rounded p-3"
          }
        >
          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 mb-6 text-neutral"}
              style={{ borderBottom: "1px solid gray" }}
            >
              CRUD Information
            </h6>
            {UsersDetail.CRUD.map((item, index) => (
              <div key={index}>
                <label
                  htmlFor={"crud"}
                  className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
                >
                  {item.label}
                </label>
                <p id={"crud"}>
                  {data[item.value] ? data[item.value] : "- - - -"}
                </p>
              </div>
            ))}
          </div>
          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 mb-6 text-neutral"}
              style={{ borderBottom: "1px solid gray" }}
            >
              Personal
            </h6>
            {UsersDetail.Personal.map((item, index) => (
              <div key={index}>
                <label
                  htmlFor={"personal"}
                  className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
                >
                  {item.label}
                </label>
                <p id={"personal"}>
                  {data[item.value] ? data[item.value] : "- - - -"}
                </p>
              </div>
            ))}
          </div>
          <div className={"flex flex-col flex-1 justify-center items-start"}>
            <h6
              className={"mr-5 mb-6 text-neutral"}
              style={{ borderBottom: "1px solid gray" }}
            >
              Account
            </h6>
            {UsersDetail.Account.map((item, index) => (
              <div key={index}>
                <label
                  htmlFor={"Account"}
                  className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
                >
                  {item.label}
                </label>
                <p id={"Account"}>
                  {data[item.value] ? data[item.value] : "- - - -"}
                </p>
              </div>
            ))}
            <label
              htmlFor={"Account"}
              className={"whitespace-nowrap text-gray-400 mb-2 text-xs"}
            >
              Password:
            </label>
            <p id={"Account"}>{data.passwd ? "* * * * * * *" : "- - - -"}</p>
          </div>
        </div>

        {/*// ** roles ////////////////////////////////////////*/}

        <div
          className={
            "flex flex-col w-full mt-4 flex-1 justify-start items-start bg-base-200 rounded p-3 pb-6 mb-40 xl:mb-0"
          }
        >
          <div
            className={"mr-5 text-neutral mb-6"}
            style={{ borderBottom: "1px solid gray" }}
          >
            Roles
          </div>
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
