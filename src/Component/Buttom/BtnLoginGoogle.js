import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

function BtnLoginGoogle() {
  const navigate = useNavigate();

  const onSuccess = async (res) => {
    if (res) {
      localStorage.setItem("googleAcc", JSON.stringify(res.profileObj));
      console.log(res.profileObj);
      navigate("/");
    }
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        className="m-1 border w-full border-gray-300 text-stone-800 md:text-base p-1 box-border h-10 md:w-28 hover:bg-gray-200 shadow-none"
        buttonText="Google"
        clientId={process.env.REACT_APP_KEY_GOOGLE_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      />
    </div>
  );
}

export default BtnLoginGoogle;
