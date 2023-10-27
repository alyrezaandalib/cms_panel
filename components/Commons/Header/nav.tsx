"use client";
import Image from "next/image";
import RadinCloud from "@/public/radin-logo.svg";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/navigation";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { AccountSetting } from "@/JsonFiles/AccountSetting";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setCookie } from "cookies-next";

type themeType = {
  theme: string | RequestCookie | undefined;
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

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
    setCookie("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div
        className={`flex w-full items-center px-2 fixed justify-between z-10 bg-none`}
      >
        {/*// ** logo ////////////////////////////////////////*/}

        <Image
          src={RadinCloud}
          alt={"Radin Cloud CMS"}
          width={80}
          className={"p-2"}
        />

        {/*// ** menu ////////////////////////////////////////*/}

        <div>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                sx={{ ml: 2, borderRadius: 4, border: 1, borderColor: "#999" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <div className={"mx-1 text-sm text-neutral/70"}>
                  alireza andalib
                </div>
                <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                backgroundColor: "rgba(24, 25, 32, 0.2)",
                mt: 1.5,
                borderRadius: 5,
                "& .MuiAvata r-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className={"text-neutral/70 p-3"}>
              <div className={"w-full my-2 flex justify-between items-center"}>
                Theme
                <FormControlLabel
                  className={"ml-10"}
                  label={""}
                  control={
                    <MaterialUISwitch
                      checked={theme !== "light"}
                      onClick={themeHandler}
                    />
                  }
                />
              </div>
              <Divider />
              {AccountSetting.map((item, index) => (
                <button
                  className={
                    "flex items-center w-[95%] mx-auto rounded-xl p-2 hover:bg-[#888]/10 my-0.5"
                  }
                  key={index}
                  onClick={() => router.push(item.href)}
                >
                  <div className={"mr-1.5 text-lg"}>{item.icon}</div>
                  {item.name}
                </button>
              ))}
              <button
                className={
                  "flex items-center bg-red-500 w-[95%] mx-auto rounded-xl p-3 hover:opacity-80"
                }
              >
                <Logout
                  fontSize="small"
                  className={"mr-1.5 text-lg text-white"}
                />
                Logout
              </button>
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}
