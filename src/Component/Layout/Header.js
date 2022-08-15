import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import BtnLogoutGoogle from "../Buttom/BtnLogoutGoogle";
import logoYoutube from "../../Img/YouTube_Logo.png";
import { useEffect, useState } from "react";
import Search from "../Page/Share";

function Header(props) {
  const {handleSearch} = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [acc, setAcc] = useState();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAcc(localStorage.getItem("googleAcc"));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar className="d-flex justify-content-between">
          <div>
            <Link href="/">
              <img style={{ width: "100px" }} src={logoYoutube} />
            </Link>
          </div>
          {acc != null || acc != undefined ? (
            <div className="d-flex">
              <div className="pe-2">
                <Search handleSearch={handleSearch} />
              </div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="medium" />
              </IconButton>
            </div>
          ) : (
            <div>
              <Link href="/login" underline="none">
                Login
              </Link>
            </div>
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="ps-2" onClick={handleClose}>
              <AccountBoxIcon fontSize="medium" className="pe-1" /> Profile
            </MenuItem>
            <MenuItem className="ps-0">
              <BtnLogoutGoogle />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
