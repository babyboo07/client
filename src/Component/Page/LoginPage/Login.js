import * as React from "react";
import BtnLoginGoogle from "../../Buttom/BtnLoginGoogle";
import { login } from "../../../Hook/useMongoose";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Login() {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    login(formData);
    navigate("/");
  };

  return (
    <figure className="h-screen flex bg-gray-100 sm: px-3 ">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to My-App</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-gray-800 mt-4 mb-4">Login to your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <FontAwesomeIcon className="absolute top-4 text-gray-300" icon={faUser} />
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={
                  "w-full p-3 text-gray-800 border-b outline-none text-sm transition duration-150 ease-in-out mb-1 ml-2 focus:border-red-500 "
                }
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon className="absolute top-4 text-gray-300" icon={faLock} />
              <input
                name="password"
                type={eye === true ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={
                  "w-full p-3 text-gray-800 border-b outline-none text-sm transition duration-150 ease-in-out mb-1 ml-2 focus:border-red-500"
                }
              />
              {eye ? (
                <button type="button" onClick={(e) => setEye(false)}>
                  <FontAwesomeIcon className="absolute top-4 right-0 text-gray-300 " icon={faEye} />
                </button>
              ) : (
                <button type="button" onClick={(e) => setEye(true)}>
                  <FontAwesomeIcon
                    className="absolute top-4 right-0 text-gray-300"
                    icon={faEyeSlash}
                  />
                </button>
              )}
            </div>
            <div className="flex items-center mt-3">
              <button
                type="sumbit"
                className={
                  "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none w-full"
                }
                value="Login"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center my-4 justify-center border border-t w-full relative">
            <p className={"justify-center text-gray-400 absolute px-5 bg-white"}>or</p>
          </div>
          <div className="flex items-center flex-col md:justify-around pt-0.5 lg:flex-row">
            <BtnLoginGoogle />
            <button className="m-1 border text-gray-800 w-full border-gray-300 p-1 box-border h-10 md:w-28 md:text-base  hover:bg-blue-500 hover:text-white  ">
              <FontAwesomeIcon className="pr-1" icon={faFacebook} />
              Facebook
            </button>
            <button className="m-1 border text-gray-800 w-full border-gray-300 p-1 box-border h-10 md:w-28 md:text-base hover:bg-gray-200 ">
              <FontAwesomeIcon className="pr-1" icon={faGithub} />
              Github
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default Login;
