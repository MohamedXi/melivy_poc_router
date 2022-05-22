import {
  IconButton as MuiIconButton, Menu,
  MenuItem, Tooltip
} from "@mui/material";
import React from "react";
import { LogOut, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { useAuthActions } from "../recoil/actions/auth.actions";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    await authActions.logout();
    localStorage.removeItem("user");
    navigate.push("/auth/sign-in");
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
        >
          <User />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem component={Link} to="/account/profile">
          <User style={{marginRight: "10px"}} size={15}/> Profile
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
         <LogOut style={{marginRight: "10px"}} size={15}/> Sign out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
