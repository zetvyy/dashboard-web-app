import React, { useEffect } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../redux/actions/eventActions";

const CardEvent = () => {
  const event = useSelector((state) => state.event.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <EventNoteIcon /> <span>{event[0]?.date}</span>
        </Typography>
        <Typography variant="h5" component="div">
          {event[0]?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event[0]?.location}
        </Typography>
        <Typography variant="body2">
          <PeopleIcon /> participants
        </Typography>
        <Typography variant="body2">note: {event[0]?.note}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Done</Button>
      </CardActions>
    </Card>
  );
};

export default CardEvent;
