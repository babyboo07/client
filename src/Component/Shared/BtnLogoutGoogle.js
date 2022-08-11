import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LogoutIcon from '@mui/icons-material/Logout';

const clientId = "225661972533-n8l1k438lkbnti0ubs6dm1jjetj8kkga.apps.googleusercontent.com";

function BtnLogoutGoogle() {
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("logout");
    localStorage.removeItem("googleAcc");
    navigate("/login");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        icon={false}
        className="bg-white border-0 text-body shadow-none fs-6"
      >
        <LogoutIcon fontSize="medium"className="pe-1"/>Logout
      </GoogleLogout>
    </div>
  );
}

export default BtnLogoutGoogle;
