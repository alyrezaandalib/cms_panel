import React, {useEffect, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {usePathname, useRouter} from "next/navigation";
import {List} from "@mui/material";
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

const Sidebar: React.FC<SidebarProps> = ({items, open}) => {
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
        // <div className={"hidden xl:block w-[15%] mt-[100px]"}>
        //   {items.map((item) => (
        //     <List key={item.id}>
        //       <ListItemButton
        //         onClick={() => toggleList(item.id)}
        //         className={"hover:bg-[#aaa]/20 flex justify-between mx-auto rounded-lg w-[85%] py-3"}
        //
        //       >
        //         <div className={"flex items-center"}>
        //           <div
        //             className={"text-neutral/70"}
        //           >
        //             {item.icon}
        //           </div>
        //           <div className={`ml-3`}>
        //             {item.name}
        //           </div>
        //         </div>
        //         <MdOutlineKeyboardArrowDown
        //             className={`transform duration-300 ease-in-out transition-transform ${
        //                 openLists.includes(item.id) ? "rotate-180" : ""
        //             }`}
        //         />
        //       </ListItemButton>
        //       {openLists.includes(item.id) && (
        //         <ul>
        //           <List
        //             component="div"
        //             disablePadding
        //             sx={{
        //               marginTop: "10px",
        //               width: "80%",
        //               marginX: "auto",
        //             }}
        //           >
        //             {item.items.map((subItem) => (
        //               <Link href={subItem.href} key={subItem.id}>
        //                 <ListItemButton
        //                   className={`py-3 w-[90%] hover:bg-[#aaa]/20 my-0.5 rounded-lg ml-3 ${
        //                     pathName === subItem.href && "bg-accent text-neutral"
        //                   }`}
        //                 >
        //
        //                   <div className={`text-xs`}>
        //                     {subItem.name}
        //                   </div>
        //                 </ListItemButton>
        //               </Link>
        //             ))}
        //           </List>
        //         </ul>
        //       )}
        //     </List>
        //   ))}
        // </div>
        <aside className={'hidden xl:block w-[15%] mt-[100px] pb-10'}   style={{ overflowY: "auto", height: "calc(100vh - 6rem)" }}>
            <ul className="menu sidebar">
                {items.map((item, index) =>
                    <li key={index} >
                        <div className={"flex justify-between items-center rounded-lg mb-3 py-4 hover:bg-[#aaa]/20 w-[97%] mx-auto"} onClick={() => toggleList(item.id)}>
                            <div className={"flex items-center"}>
                                <summary className={"text-lg mr-2"}>{item.icon}</summary>
                                <summary>{item.name}</summary>
                            </div>
                            <MdOutlineKeyboardArrowDown
                                className={`transform duration-300 ease-in-out transition-transform ${
                                    openLists.includes(item.id) ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                        {openLists.includes(item.id) &&
                            <ul>
                                {item.items.map((item, index) =>
                                    <li key={index}>
                                        <Link href={item.href}
                                              className={`py-3 w-[90%] hover:bg-[#aaa]/20  rounded-lg ml-3 ${
                                                  pathName === item.href && "bg-accent text-neutral"
                                              }`}>
                                            <div>{item.name}</div>
                                        </Link>
                                    </li>
                                )}

                            </ul>
                    }
                    </li>)}
            </ul>
        </aside>
    );
};

export default Sidebar;
