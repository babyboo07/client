import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LogoutIcon from '@mui/icons-material/Logout';

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
        clientId={process.env.KEY_GOOGLE_API}
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
