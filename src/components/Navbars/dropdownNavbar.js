import React from "react";
import Popper from "popper.js";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
//import custom components
import history from '../Routes/history'
import * as Utility from '../Helpers/Utility'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <div>
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/FrontPage"}>Home</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Summary-Page"}>Styles</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Portrait-Page"}>Portrait</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Landscape-Page"}>Landscape</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Street-Page"}>Street</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Star-Page"}>Star</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Urban-Page"}>Urban</NavDropdown.Item>
              <NavDropdown.Item href={Utility.DEFAULT_URL + "/Wedding-Page"}>Wedding</NavDropdown.Item>
            </NavDropdown>
            <NavItem>
              <NavLink
                href={Utility.DEFAULT_URL + "/BookMe-Page"}
                target="_self"
                title="Book Me">
                Book Me
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <div>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}>
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                target="_self"
                title="About Me"
                to="/Profile-Page" tag={Link}>
                <i className="fa nc-icon nc-badge" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/karthshen/"
                target="_blank"
                title="Follow me on Instagram!">
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/karthshen/"
                target="_blank"
                title="Check out my Github!">
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="http://karthshen.github.io/"
                target="_blank">
                <i className="fa nc-icon nc-book-bookmark" /> Another Simple Page
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar >
    </div>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown />
    </>
  );
}