import React, { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { List } from "@mui/material";
import Link from "next/link";

type SidebarItem = {
  id: number;
  name: string;
  icon: JSX.Element;
  items: {
    id: number;
    name: string;
    icon: JSX.Element;
    href: string;
  }[];
};

type SidebarProps = {
  items: SidebarItem[];
  open: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ items, open }) => {
  const pathName = usePathname();
  const [openLists, setOpenLists] = useState<number[]>([]);

  useEffect(() => {
    for (let item of items) {
      for (let i of item["items"]) {
        if (i["href"] === pathName) {
          setOpenLists([item["id"]]);
        }
      }
    }
  }, []);

  const toggleList = (id: number) => {
    if (openLists.includes(id)) {
      // If the list is already open, close it
      setOpenLists(openLists.filter((listId) => listId !== id));
    } else {
      // If the list is closed, open it
      setOpenLists([...openLists, id]);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <List key={item.id}>
          <ListItemButton
            onClick={() => toggleList(item.id)}
            className={"hover:bg-[#aaa]/20 flex justify-between"}
            sx={{
              width: "90%",
              marginX: "auto",
              margin: 0,
              padding: "15px",
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              borderRadius: 3,
            }}
          >
            <div className={"flex"}>
              <ListItemIcon
                className={"text-neutral/70"}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  fontSize: 25,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <div className={`text-sm ${open ? "" : "hidden"}`}>
                {item.name}
              </div>
            </div>
            {open ? (
              <MdOutlineKeyboardArrowDown
                className={`transform duration-300 ease-in-out transition-transform ${
                  openLists.includes(item.id) ? "rotate-180" : ""
                }`}
              />
            ) : (
              ""
            )}
          </ListItemButton>
          {openLists.includes(item.id) && (
            <ul>
              <List
                component="div"
                disablePadding
                sx={{
                  marginTop: "10px",
                  width: "80%",
                  marginX: "auto",
                }}
              >
                {item.items.map((subItem) => (
                  <Link href={subItem.href} key={subItem.id}>
                    <ListItemButton
                      className={`p-3 hover:bg-[#aaa]/20 my-0.5 ${
                        pathName === subItem.href && "bg-accent text-neutral"
                      }`}
                      sx={{ marginLeft: 2.5, borderRadius: 3 }}
                    >
                      <ListItemIcon className={"text-neutral/70"}>
                        {subItem.icon}
                      </ListItemIcon>
                      <div className={`text-xs ${open ? "" : "hidden"}`}>
                        {subItem.name}
                      </div>
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </ul>
          )}
        </List>
      ))}
    </ul>
  );
};

export default Sidebar;
