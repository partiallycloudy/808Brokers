import React from "react";
import { Route, Routes } from "react-router-dom";
import Conference from "./Components/Conference/Conference";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path="/conference"
          element={<ProtectedRoute component={Conference} />}
        />
      </Routes>
    </>
  );
};

export default App;
