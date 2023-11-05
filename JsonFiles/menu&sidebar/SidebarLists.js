import { AiOutlineSetting, AiOutlinePushpin } from "react-icons/ai";
import { VscDashboard } from "react-icons/vsc";
import { MdOutlinePermMedia, MdAdd } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";

export const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <VscDashboard />,
    items: [
      {
        id: 1,
        name: "Home",
        icon: <HiOutlineHome />,
        href: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Blog",
    icon: <HiOutlineDocumentText />,
    items: [],
  },
  {
    id: 3,
    name: "Posts",
    icon: <AiOutlinePushpin />,
    items: [
      {
        id: 1,
        name: "All posts",
        icon: <AiOutlineSetting />,
        href: "/posts",
      },
      {
        id: 2,
        name: "Add new",
        icon: <MdAdd />,
        href: "/posts/add-new",
      },
      {
        id: 3,
        name: "Category",
        icon: <AiOutlineSetting />,
        href: "/posts/category",
      },
      {
        id: 4,
        name: "Tags",
        icon: <AiOutlineSetting />,
        href: "/posts/tags",
      },
    ],
  },
  {
    id: 4,
    name: "Media",
    icon: <MdOutlinePermMedia />,
    items: [
      {
        id: 1,
        name: "Library",
        icon: <IoLibrary />,
        href: "/media",
      },
      {
        id: 2,
        name: "Add new",
        icon: <MdAdd />,
        href: "/media/add-new",
      },
    ],
  },
  {
    id: 5,
    name: "Users",
    icon: <FaUsers />,
    items: [
      {
        id: 1,
        name: "All Users",
        icon: <CiMenuKebab />,
        href: "/users",
      },
      {
        id: 2,
        name: "Add new",
        icon: <MdAdd />,
        href: "/users/add-new",
      },
      {
        id: 3,
        name: "Profile",
        icon: <FaUserAlt />,
        href: "/users/profile",
      },
    ],
  },
  {
    id: 6,
    name: "Tools",
    icon: <TbTools />,
    items: [],
  },
  {
    id: 7,
    name: "Settings",
    icon: <AiOutlineSetting />,
    items: [],
  },
];
