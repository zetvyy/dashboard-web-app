import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/createEvent";
import Dashboard from "./pages/dashboard";
import Event from "./pages/event";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create/event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
