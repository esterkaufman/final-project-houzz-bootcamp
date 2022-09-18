import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import DeleteProfile from "../features/admin/components/deleteProfile";
import ManageProfile from "../features/admin/components/manageProfile";
import ToastGeneral from "../features/admin/components/toast";
import Data from "./menu/componnent/data";
import Home from "./menu/componnent/home";
import Menu from "./menu/componnent/menu";
import NotDefindeMenuChild from "./menu/componnent/not-definde-menu-child";



class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path="/manageProfile" element={<ManageProfile />}></Route>
                        <Route path="/deleteProfile" element={<DeleteProfile />}></Route>
                        <Route path="/toast" element={<ToastGeneral />}></Route>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home/>} key="home" />,
                            <Route path="/Data" element={<Data />} key="data" />,  
                            <Route path="/notDefindeMenuChild" element={<NotDefindeMenuChild />} key="notDefindeMenuChild" />
                        ]} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

type AppRouterProps = IAppRouterProps
type AppRouterState = IAppRouterState
interface IAppRouterProps { }
interface IAppRouterState { }

export default AppRouter;
