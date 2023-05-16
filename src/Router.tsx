import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Admin from "./pages/login/Admin";
import Attendance from "./pages/attendance/Attendance";
import CheckCode from "./pages/login/CheckCode";
import Delete from "./pages/login/Delete";
import Signup from "./pages/login/Signup";
import AddClub from "./pages/login/AddClub";
import EditClub from "./pages/login/EditClub";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/editclub" element={<EditClub />} />
        <Route path="/addclub" element={<AddClub />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/checkcode" element={<CheckCode />} />
        <Route path="/attendance/:clubID" element={<Attendance />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
