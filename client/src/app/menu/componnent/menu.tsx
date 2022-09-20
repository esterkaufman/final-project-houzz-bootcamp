import { TabMenu } from "primereact/tabmenu";
import { Component } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../../css/bootstrap.min.css";
import "../../../css/style.css";
import WithRouter, { IWithRouterProps } from "../../with-router";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./home";
import NotFound from "./NotFound";
import Register from "../../../features/admin/sign/register";
import Login from "../../../features/admin/sign/login";
import Sale from "./sale";
import Renting from "./renting";
import Leasing from "./leasing";
import About from "./about";

const Menu = WithRouter(
  class MenuWIthoutRouter extends Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
      super(props);
    }
    render() {
      return (
        // <Router>
        <div className="App">
          <header className="p-3 text-bg-dark sticky-top">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link className="navbar-brand" to="/">
                  <img
                    className="bi me-2"
                    width="100"
                    src="logo-car.svg"
                    alt="logo"
                  />
                </Link>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <Link className="nav-link px-2 text-secondary" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link px-2 text-white" to="/Sale">
                      Sale
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link px-2 text-white" to="/Renting">
                      Renting
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link px-2 text-white" to="/Leasing">
                      Leasing
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link px-2 text-white" to="/About">
                      About
                    </Link>
                  </li>
                </ul>
                <form
                  className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                  role="search"
                >
                  <input
                    type="search"
                    className="form-control form-control-dark text-bg-dark"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>
                <div className="text-end">
                  <Link
                    className="btn btn-outline-light me-2"
                    to="/users/login"
                  >
                    Login
                  </Link>
                  <Link className="btn btn-warning" to="/users/register">
                    Sign-up
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Renting" element={<Renting />} />
            <Route path="/Leasing" element={<Leasing />} />
            <Route path="/About" element={<About />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        // </Router>
      );
    }
  }
);

type MenuProps = IMenuProps & IWithRouterProps;
type MenuState = IMemuState;
interface IMenuProps {}
interface IMemuState {
  menuItems: Array<any>;
}

export default Menu;
