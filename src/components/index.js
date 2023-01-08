
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavBarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="" activeStyle>
            home
          </NavLink>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/videos" activeStyle>
            videos
          </NavLink>
          <NavLink to="/board" activeStyle>
            board
          </NavLink>
          <NavLink to="/credits" activeStyle>
            credits
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;