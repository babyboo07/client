import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Component/LoginPage/Login";
import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Home from "./Component/Page/Home";
import { gapi } from "gapi-script";
import Share from "./Component/Page/Share";

function App() {
  const [state, setState] = useState();
  const clientId = "225661972533-n8l1k438lkbnti0ubs6dm1jjetj8kkga.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });


  return (
    <div className="App">
      <StyledEngineProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home state={state} setState={setState} />} />
            <Route path="/share" element={<Share />} />
          </Routes>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
