'use client'
import * as React from 'react';
import {styled, Theme, CSSObject} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ListHandler from "@/components/Commons/Sidebar/sidebarList";
import {sidebarItems} from "@/JsonFiles/SidebarLists";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    backgroundColor: 'rgba(0,0,0,0)',
    top: "5rem",
    color:"#777",
    border: "none",
    width: drawerWidth,
    overflowX: 'hidden',
    marginLeft: '15px',
    paddingBottom: "50px",
    height: "calc(100vh - 4rem)",
    zIndex: 1,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme: Theme): CSSObject => ({
    backgroundColor: 'rgba(0,0,0,0)',
    paddingBottom: "50px",
    marginLeft: '15px',
    border: "none",
    top: "5rem",
    overflowX: 'hidden',
    height: "calc(100vh - 4rem)",
    zIndex: 1,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(11)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexShrink: 0,
        paddingY: "100px",
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose} open={open}>
            <ListHandler items={sidebarItems} open={open}/>
        </Drawer>
    );
}