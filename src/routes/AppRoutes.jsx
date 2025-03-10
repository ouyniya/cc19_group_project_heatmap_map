import React from "react";
import { Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'

import Dashboard from "../pages/Dashboard";
import Mapping from "../pages/Mapping";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
