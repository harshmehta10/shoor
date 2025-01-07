import React, { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Views/Layout/Layout";
import Loader from "../Views/Layout/Loader/Loader";
import Error from "../Views/Layout/Loader/Error";
import Collection from "../Views/Pages/Collection/Collection";
// import Home from "../Views/Pages/Home/Home";
// import Services from "../Views/Pages/Services/Services";
// import Contact from "../Views/Pages/Contact/Contact";
const Pdp = lazy(() => import("../Views/Pages/Pdp/Pdp"));
const Home = lazy(() => import("../Views/Pages/Home/Home"));
const Log = lazy(() => import("../Components/Login/Log"));
const Register = lazy(() => import("../Components/Login/Register"));
const ForgetPass = lazy(() => import("../Components/Login/ForgetPass"));

const Contact = lazy(() => import("../Views/Pages/Contact/Contact"));
const EliteApparel = lazy(() => import("../Components/Elite/EliteApparel"));
const Classic = lazy(() => import("../Components/Classic/Classic"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/elite",
          element: (
            <Suspense fallback={<Loader />}>
              <EliteApparel />
            </Suspense>
          ),
        },
        {
          path: "/classic",
          element: (
            <Suspense fallback={<Loader />}>
              <Classic />
            </Suspense>
          ),
        },
        {
          path: "/organic",
          element: (
            <Suspense fallback={<Loader />}>
              <Classic />
            </Suspense>
          ),
        },

        {
          path: "/collection",
          element: (
            <Suspense fallback={<Loader />}>
              <Collection />
            </Suspense>
          ),
        },
        {
          path: "/Pdp",
          element: (
            <Suspense fallback={<Loader />}>
              <Pdp />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />}>
          <Log />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Loader />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/forgetpass",
      element: (
        <Suspense fallback={<Loader />}>
          <ForgetPass />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
