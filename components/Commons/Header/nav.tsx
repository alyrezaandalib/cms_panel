"use client";
import Image from "next/image";
import RadinCloud from "@/public/radin-logo.svg";
import { useState, useEffect } from "react";
import Menu from "@mui/joy/Menu";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setCookie } from "cookies-next";
import MobileMenu from "@/components/Commons/Header/mobileMenu";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { HiOutlineUserCircle } from "react-icons/hi";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { BiSearchAlt } from "react-icons/bi";
import DateCalender from "@/components/Commons/Header/DateCalender";

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
        className={`flex w-full items-center px-2 fixed justify-between z-20 bg-none shadow-lg xl:shadow-none`}
      >
        {/*// ** logo ////////////////////////////////////////*/}
        <Image
          src={RadinCloud}
          alt={"Radin Cloud CMS"}
          className={"p-2 w-[60px] xl:w-[80px]"}
        />

        <div className={"w-[95%] px-5 flex justify-between items-center"}>
          {/*// ** search ////////////////////////////////////////*/}

          <DateCalender />

          <Input
            startAdornment={
              <InputAdornment position={"start"}>
                <BiSearchAlt className={"text-xl"} />
              </InputAdornment>
            }
          />

          <div className={"flex items-center"}>
            {/*// ** theme ////////////////////////////////////////*/}

            <label className="swap swap-rotate mr-4">
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
              <Dropdown>
                <MenuButton
                  className={
                    "text-neutral/70 hover:bg-[rgba(0,0,0,0.1)] border-none flex item-center"
                  }
                >
                  alireza andalib
                  <HiOutlineUserCircle
                    className={"text-accent text-2xl ml-1"}
                  />
                </MenuButton>
                <Menu
                  className={
                    "bg-base-100 border-none shadow-lg p-3 w-[200px] rounded-xl"
                  }
                >
                  <button className={"btn whitespace-nowrap my-0.5"}>
                    Profile
                  </button>
                  <button className={"btn whitespace-nowrap my-0.5"}>
                    Setting
                  </button>
                  <button
                    className={"btn whitespace-nowrap my-0.5 bg-red-500"}
                    onClick={() => window.logout.showModal()}
                  >
                    exit
                  </button>
                </Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {/*// ** exit dialog ////////////////////////////////////////*/}

      <dialog id="logout" className="modal">
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
