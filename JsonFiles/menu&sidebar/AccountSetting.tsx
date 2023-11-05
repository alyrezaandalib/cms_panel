import Settings from "@mui/icons-material/Settings";
import {CiUser} from "react-icons/ci"
import * as React from "react";

export const AccountSetting = [
    {
        name: "Profile",
        icon: <CiUser/>,
        href: "profile"
    }, {
        name: "Settings",
        icon: <Settings fontSize="small"/>,
        href: "setting"
    }
]
