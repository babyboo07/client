import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Hook/useMongoose";

function BtnLoginGoogle() {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onSuccess = (res) => {
    if (res) {
      localStorage.setItem("googleAcc", JSON.stringify(res.profileObj));
      // dispath(addUser(res.profileObj));
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
        clientId={process.env.REACT_APP_KEY_GOOGLE_API}
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
