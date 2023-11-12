"use client";
import Image from "next/image";
import RadinCloud from "@/public/radin-logo.svg";
import { useState, useEffect } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setCookie } from "cookies-next";
import MobileMenu from "@/components/Commons/Header/mobileMenu";
import DateCalender from "@/components/Commons/Header/DateCalender";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import style from "./style.module.css";

type themeType = {
  theme: string | RequestCookie | undefined;
};
export default function Nav(props: themeType) {
  // ** theme ////////////////////////////////////////
  const [theme, setTheme] = useState(props.theme);
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    // @ts-ignore
    setCookie("theme", theme);
    // @ts-ignore
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <div
        className={`flex w-full items-center px-3 fixed justify-between z-20 bg-none shadow-lg xl:shadow-none`}
      >
        {/*// ** logo ////////////////////////////////////////*/}
        <Image
          src={RadinCloud}
          alt={"Radin Cloud CMS"}
          className={"p-2 w-[60px] xl:w-[80px]"}
        />

        <div
          className={
            "w-[95%] xl:px-5 flex justify-end xl:justify-between items-center"
          }
        >
          {/*// ** calender ////////////////////////////////////////*/}

          <DateCalender theme={props.theme} />

          <div className={"flex items-center justify-between"}>
            {/*// ** search ////////////////////////////////////////*/}

            <div className={style.inputContainer}>
              <input
                placeholder="Search something..."
                className={style.input}
                name="text"
                type="text"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={style.icon}
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect fill="white"></rect>
                  <path
                    d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>

            {/*// ** theme ////////////////////////////////////////*/}

            <label className="swap swap-rotate ml-3 btn btn-ghost btn-circle">
              <input
                type="checkbox"
                onChange={themeHandler}
                checked={theme !== "light"}
              />
              {/* sun icon */}
              <svg
                className="swap-off fill-base-content/90 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on w-5 h-5 fill-base-content/90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/*// ** Mobile Menu ////////////////////////////////////////*/}

            <div className={"flex justify-between items-center"}>
              <div className={"block xl:hidden"}>
                <MobileMenu />
              </div>
            </div>

            {/*// ** Desktop Menu ////////////////////////////////////////*/}

            <div className={"hidden xl:block"}>
              <div className={"hidden xl:block"}>
                <button className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    className={
                      "flex justify-center items-center btn btn-ghost btn-circle"
                    }
                  >
                    <AiOutlineUser className={"text-xl"} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
                  >
                    <li style={{ textAlign: "center" }}>
                      <Link href={""}>My Profile</Link>
                    </li>
                    <li>
                      <Link
                        className={"bg-error my-2 text-white"}
                        href={""}
                        onClick={() => window.logout.showModal()}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*// ** exit dialog ////////////////////////////////////////*/}

      <dialog id="logout">
        <form
          method="dialog"
          className="modal-box w-3/12 max-w-3xl text-neutral"
        >
          <h3 className="text-md mb-3">Sign out of the user account</h3>
          <p className={"mb-3 text-sm"}>You want to log out of your account?</p>
          <div className="modal-action">
            <button
              className="btn btn-sm btn-error text-white font-normal rtl:ml-4 ltr:mr-4"
              onClick={() => {
                // LogOut()
              }}
            >
              exit
            </button>
            <button className="btn btn-sm btn-ghost font-normal mr-4">
              cancel
            </button>
          </div>
        </form>
      </dialog>
    </header>
  );
}

declare global {
  interface Window {
    logout: any;
  }
}
