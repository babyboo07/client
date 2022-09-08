import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect } from "react";
import Home from "./Component/Page/Home";
import { gapi } from "gapi-script";
import Login from "./Component/Page/LoginPage/Login";
import ModalVideo from "./Component/Modal/ModalVideo";

function App() {

  const clientId= '225661972533-n8l1k438lkbnti0ubs6dm1jjetj8kkga.apps.googleusercontent.com';

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
          <Route path="/" element={<Home />} />
          <Route path="/sharevideo" element={<ModalVideo />} />
        </Routes>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
