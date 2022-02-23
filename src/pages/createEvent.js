import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainListItems } from "../components/ListItems";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Style from "../assets/css/CreateEvent.module.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { postEvent } from "../redux/actions/eventActions";

const mdTheme = createTheme();

const CreateEvent = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    title: yup.string("Enter title").required("Title is required"),
    location: yup.string("Enter location").required("location is required"),
    participant: yup
      .string("Enter participant")
      .required("participant is required"),
    date: yup.string("Enter date").required("date is required"),
    note: yup
      .string("Enter note")
      .min(50, "Must be more than 50 characters length")
      .required("note is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      location: "",
      participant: "",
      date: "",
      note: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const dispatch = useDispatch();

  const submitForm = (e) => {
    const { name, title, location, participant, date, note } = formik.values;

    e.preventDefault();
    if ((name, title, location, participant, date, note)) {
      dispatch(postEvent(name, title, location, participant, date, note));
    } else {
      alert("form cannot be empty");
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Add New Event
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 800,
                    width: 1200,
                    alignItems: "center",
                  }}
                >
                  <h1>Create or Add new event</h1>
                  <form className={Style.form}>
                    <TextField
                      id="name"
                      label="Your Name"
                      type="text"
                      name="name"
                      sx={{ width: "450px" }}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      id="title"
                      label="Title"
                      type="text"
                      name="title"
                      sx={{ width: "450px" }}
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
                      helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                      id="location"
                      label="Location"
                      type="text"
                      name="location"
                      sx={{ width: "450px" }}
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                    <TextField
                      id="participant"
                      label="Participant"
                      type="text"
                      name="participant"
                      sx={{ width: "450px" }}
                      value={formik.values.participant}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.participant &&
                        Boolean(formik.errors.participant)
                      }
                      helperText={
                        formik.touched.participant && formik.errors.participant
                      }
                    />
                    <TextField
                      id="datetime-local"
                      label="Date"
                      type="datetime-local"
                      // defaultValue="2017-05-24T10:30"
                      value={formik.values.date}
                      sx={{ width: 250 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(val) => {
                        formik.setFieldValue("", val);
                      }}
                      error={formik.touched.date && Boolean(formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date}
                    />
                    <h3>Note :</h3>
                    <TextField
                      id="note"
                      name="note"
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Must be more than 50 characters"
                      style={{ height: 100 }}
                      value={formik.values.note}
                      onChange={formik.handleChange}
                      error={formik.touched.note && Boolean(formik.errors.note)}
                      helperText={formik.touched.note && formik.errors.note}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={(e) => submitForm(e)}
                      onSubmit={formik.handleSubmit}
                    >
                      Submit
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CreateEvent;
