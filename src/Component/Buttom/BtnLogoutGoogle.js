import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LogoutIcon from '@mui/icons-material/Logout';

function BtnLogoutGoogle(props) {
  const navigate = useNavigate();
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
        clientId={process.env.REACT_APP_KEY_GOOGLE_ID}
        onLogoutSuccess={onSuccess}
        icon={false}
        className="text-gray-800 block w-full h-full text-left px-3 py-2 text-sm shadow-none"
      >Logout
      </GoogleLogout>
    </div>
  );
}

export default BtnLogoutGoogle;
