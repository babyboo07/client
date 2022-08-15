import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

function BtnLoginGoogle() {
  const navigate = useNavigate();

  const onSuccess = (res) => {
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
        clientId={process.env.KEY_GOOGLE_API}
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
