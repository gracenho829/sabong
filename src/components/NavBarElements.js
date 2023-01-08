import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #fffff;
  padding-top: 2rem;
  padding-right: 3rem;
  z-index: 12;
  font-size: 1.5rem;
  position: absolute;
  right: 0px;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #87B58E;
  }
  @media screen and (max-width: 690px) {
    padding: 0 1rem;
   }
   @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
   }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 690px) {
   /* display: none;*/
   font-size:1rem;
   text-align:center;
   position:relative;
  }
`;