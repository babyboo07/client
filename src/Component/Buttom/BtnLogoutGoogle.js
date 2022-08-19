import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LogoutIcon from '@mui/icons-material/Logout';

function BtnLogoutGoogle(props) {
  const navigate = useNavigate();
  const clientId= '225661972533-n8l1k438lkbnti0ubs6dm1jjetj8kkga.apps.googleusercontent.com';
  const onSuccess = () => {
    console.log("logout");
    localStorage.removeItem("googleAcc");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
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
