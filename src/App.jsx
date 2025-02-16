import {
  Route,
  createBrowserRouter,
  Link,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LawyearDetails from "./Pages/LawyearDetails/LawyearDetails";
import MobileNav from "./Components/MobileNav/MobileNav";
import AllLawyears from "./Pages/AllLawyears/AllLawyears";
import LogIn from "./Components/LogIn/LogIn";


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
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path="/LawyearDetails" element={<LawyearDetails />} />
      <Route path="/AllLawyears" element={<AllLawyears />} />
      <Route path="/LogIn" element={<LogIn />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
