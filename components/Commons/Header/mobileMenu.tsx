import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RiMenu4Line } from "react-icons/ri";
import { AccountSetting } from "@/JsonFiles/menu&sidebar/AccountSetting";
import Link from "next/link";

type Anchor = "top";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {AccountSetting.map((item, index) => (
          <Link key={index} href={item.href}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className={"text-neutral"}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div key={"top"}>
      <button className={"p-2"} onClick={toggleDrawer("top", true)}>
        <RiMenu4Line className={"text-2xl"} />
      </button>
      <SwipeableDrawer
        PaperProps={{
          className: "bg-primary rounded-b-lg text-neutral",
        }}
        sx={{ backgroundColor: "rgb(0,0,0,0)" }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </div>
  );
}
