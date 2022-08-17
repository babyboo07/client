import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

function BtnLoginGoogle() {
  const navigate = useNavigate();
  const clientId= '225661972533-n8l1k438lkbnti0ubs6dm1jjetj8kkga.apps.googleusercontent.com';

  const onSuccess = async (res) => {
    if (res) {
      localStorage.setItem("googleAcc", JSON.stringify(res.profileObj));
      console.log(res.profileObj);
      navigate("/")
    }
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttomText="Login Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default BtnLoginGoogle;
