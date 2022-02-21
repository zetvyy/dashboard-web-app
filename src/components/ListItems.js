import * as React from "react";
import EventIcon from "@mui/icons-material/Event";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const mainListItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Event",
    path: "/event",
    icon: <EventIcon />,
  },
  {
    title: "Add New Event",
    path: "/create/event",
    icon: <AddBoxIcon />,
  },
];
