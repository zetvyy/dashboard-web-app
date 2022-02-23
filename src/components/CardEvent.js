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
import Style from "../assets/css/CardEvent.module.css";

const CardEvent = () => {
  const events = useSelector((state) => state.event.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <>
      {events.map((event) => {
        return (
          <Card sx={{ minWidth: 375, mb: 5, mr: 5 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                className={Style.date}
              >
                <EventNoteIcon sx={{ fontSize: 25 }} />
                <span>{event.date}</span>
              </Typography>
              <Typography variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {event.location}
              </Typography>
              <Typography variant="body2">
                <PeopleIcon />{" "}
                <span className={Style.participant}>{event.participant}</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  border: "1px solid #f1eaea",
                  height: "50px",
                  p: 1,
                }}
              >
                note: {event.note}
              </Typography>
            </CardContent>
            <CardActions className={Style.wrapper}>
              <Typography
                sx={{ fontSize: 14, mt: 3 }}
                color="text.secondary"
                gutterBottom
              >
                created by {event.name}
              </Typography>
              <Button
                size="small"
                variant="contained"
                className={Style.btn_done}
              >
                Done
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default CardEvent;
