import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import {
  DrawerIcon,
  NavBarWrapper,
  NavBody,
  NavBtnWrappers,
  NavItem,
  NavItems,
  NavLists,
} from "./navbarStyles";
import { navigationModel as navData } from "../../models/navData";
import SideBar from "../sidebar/sideBar";

const NavBar = () => {
  const [sideBarStatus, setSideBarStatus] = useState("collapsed");

  const sideBarRef: any | React.MutableRefObject<undefined> = useRef();

  const navigate = useNavigate();

  const navigator = (path: string) => {
    return navigate(path);
  };

  const toggleSideBar = () => sideBarRef?.current.toggleBar();

  return (
    <>
      <SideBar data={navData} setOpened={setSideBarStatus} ref={sideBarRef} />
      <NavBarWrapper>
        <NavBody>
          {/* Company logo and navigation links section */}
          <NavLists>
              {sideBarStatus !== "toggled" && (
                <img
                  onClick={() => navigator("/")}
                  // style={{ position: 'relative', right: 30 }}
                  src={Logo}
                  alt="company-logo"
                />
              )}
            <NavItems>
              {navData.slice(0, -2).map((navItem, i) =>
                navItem.label !== "Home" ? (
                  <NavItem key={i}>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          // color: isActive ? "#E10234" : "#90A2B2",
                          textDecoration: "none",
                        };
                      }}
                      to={navItem.path}
                    >
                      <Typography variant="body1" fontSize={16}>
                        {navItem.label}
                      </Typography>
                    </NavLink>
                  </NavItem>
                ) : null
              )}
            </NavItems>
          </NavLists>

          {/* Authentication button section */}
          <NavBtnWrappers>
            <NavLink to="/signup">
              <Button style={{ marginRight: 20 }} onClick={() => navigator("/signup")} variant="text">
                Login
              </Button>
            </NavLink>
            <NavLink to="/signin">
              <Button variant="contained">Get started</Button>
            </NavLink>
          </NavBtnWrappers>

          {/* Side toggle indicator */}
          {sideBarStatus === "toggled" ? null : (
            <DrawerIcon onClick={toggleSideBar} size={50} />
          )}
        </NavBody>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
