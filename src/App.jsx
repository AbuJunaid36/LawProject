// src/App.jsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LawyearDetails from "./Pages/LawyearDetails/LawyearDetails";
import MobileNav from "./Components/MobileNav/MobileNav";
import AllLawyears from "./Pages/AllLawyears/AllLawyears";
import LogIn from "./Components/LogIn/LogIn";
import AppointLawyears from "./Pages/AppointLawyears/AppointLawyears";
import ForLawyears from "./Pages/ForLawyears/ForLawyears";
import SignupLawyear from "./Pages/ForLawyears/SignupLawyear";
import WaitingRoom from "./Pages/WaitingRoom/WaitingRoom";
import BookLawyearAppointment from "./Pages/BookLawyearAppointment/BookLawyearAppointment";
import DocumentCheck from "./Pages/DocumentCheck/DocumentCheck";
import FactCheck from "./Pages/FactCheck/FactCheck";
import AdminDashboard from "./Pages/AdminPanel/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout"; // Import the AdminLayout
import AdminSettings from "./Pages/AdminPanel/AdminSettings";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <MobileNav />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/LawyearDetails" element={<LawyearDetails />} />
        <Route path="/AllLawyears" element={<AllLawyears />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/AppointLawyears" element={<AppointLawyears />} />
        <Route path="/ForLawyears" element={<ForLawyears />} />
        <Route path="/SignupLawyear" element={<SignupLawyear />} />
        <Route path="/WaitingRoom" element={<WaitingRoom />} />
        <Route
          path="/BookLawyearAppointment"
          element={<BookLawyearAppointment />}
        />
        <Route path="/DocumentCheck" element={<DocumentCheck />} />
        <Route path="/FactCheck" element={<FactCheck />} />
      </Route>

      {/* Admin Routes (without Header and Footer) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
