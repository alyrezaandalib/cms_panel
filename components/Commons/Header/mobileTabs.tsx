"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineHome } from "react-icons/hi";
import { AiOutlinePushpin } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const menu = [
  {
    id: 0,
    name: "Media",
    icon: <MdOutlinePermMedia />,
    dis: "translate-x-0",
    href: "/media",
  },
  {
    id: 1,
    name: "Posts",
    icon: <HiOutlineDocumentText />,
    dis: "translate-x-16",
    href: "/posts",
  },
  {
    id: 2,
    name: "Home",
    icon: <HiOutlineHome />,
    dis: "translate-x-32",
    href: "/",
  },
  {
    id: 3,
    name: "Posts",
    icon: <AiOutlinePushpin />,
    dis: "translate-x-48",
    href: "/posts",
  },
  {
    id: 4,
    name: "Users",
    icon: <FaUsers />,
    dis: "translate-x-64",
    href: "/users",
  },
];

export default function MobileTabs() {
  const [active, setActive] = useState(2);
  const pathName = usePathname();

  useEffect(() => {
    const filteredItem = menu.find((item) => pathName === item.href);
    if (filteredItem) {
      setActive(filteredItem.id);
    }
  }, []);

  return (
    <div
      style={{
        boxShadow: "25px 0 25px -5px rgb(0 0 0 / 0.1)",
      }}
      className={
        "bg-secondary max-h-[4.4rem] w-full flex justify-center rounded-t-xl px-6"
      }
    >
      <ul className={"flex justify-between relative"}>
        <span
          style={{
            borderRadius: "50%",
            border: "4px solid rgba(0,0,0,0.3)",
            boxShadow: " 0px 25px 100px -12px",
          }}
          className={`bg-accent duration-500 ${menu[active].dis} h-16 w-16 absolute -top-6 shadow-accent`}
        >
          {/*<span*/}
          {/*  className={*/}
          {/*    "w-3.5 h-3.5 absolute top-4 -left-[18px] rounded-tr-lg shadow-myShadow1 shadow-accent/10"*/}
          {/*  }*/}
          {/*></span>{" "}*/}
          {/*<span*/}
          {/*  className={*/}
          {/*    "w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-lg shadow-myShadow2"*/}
          {/*  }*/}
          {/*></span>*/}
        </span>
        {menu.map((item, index) => (
          <li key={index} className={"w-16"}>
            <Link
              href={item.href}
              className={"flex flex-col justify-center items-center pt-6"}
              onClick={() => setActive(index)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 z-10 text-neutral" ${
                  index === active && "-mt-6"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`${
                  active === index
                    ? "translate-y-4 mt-1 duration-700 opacity-100 text-neutral"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
