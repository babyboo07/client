import BtnLogoutGoogle from "../Buttom/BtnLogoutGoogle";
import logoYoutube from "../../Img/YouTube_Logo.png";
import { useEffect, useState } from "react";
import Search from "../Page/Share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const { handleSearch } = props;
  const [acc, setAcc] = useState();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setAcc(localStorage.getItem("googleAcc") || localStorage.getItem("accessToken"));
  }, [acc]);

  return (
    <nav className="grow pt-3 bg-white w-full shadow-xl">
        <div className="flex justify-between">
          <div>
            <a href="/">
              <img className="w-28 p-1" src={logoYoutube} />
            </a>
          </div>
          {acc != null || acc != undefined ? (
            <div className="d-flex">
              <div className="pe-2">
                <Search handleSearch={handleSearch} />
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 outline-none "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => setOpen(!isOpen)}
                  >
                    <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
                  </button>
                </div>
                {isOpen ? (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm no-underline"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Account settings
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm no-underline"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Share Video
                      </a>
                        <BtnLogoutGoogle/>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div>
              <a href="/login" className="no-underline">
                Login
              </a>
            </div>
          )}
        </div>
    </nav>
  );
}

export default Header;
