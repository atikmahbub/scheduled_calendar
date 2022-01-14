import React from "react";
import Home from "./views/Home";
import { styled } from "@mui/system";
import { Routes, Route } from "react-router-dom";

const AppLayout = styled("div")({
  padding: 20,
});

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
