import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventIcon from "@mui/icons-material/Event";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Event" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Add New Event" />
    </ListItemButton>
  </React.Fragment>
);
