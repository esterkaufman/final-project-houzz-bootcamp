import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Data from "./menu/componnent/data";
import Home from "./menu/componnent/home";
import Menu from "./menu/componnent/menu";
import TableRequests from "../features/support-system/TableRequests"
import NotDefindeMenuChild from "./menu/componnent/not-definde-menu-child";



class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home />} key="home" />,
                            <Route path="/Data" element={<Data />} key="data" />,
                            <Route path="/Request" element={<Rrquests />} key="data" >
                                <Route path=":id" element={<ResponseAnswer />} />
                            </Route>,
                            <Route path="/Request/:id" element={<ResponseAnswer /*someProps={1}*/ />} />,
                            // <Route path="/ResponseAnswer" element={<ResponseAnswer />} key="data" />,
                            <Route path="/notDefindeMenuChild" element={<NotDefindeMenuChild />} key="notDefindeMenuChild" />
                        ]} />
                    </Routes>
                </Router>
            </div >
        );
    }
}

type AppRouterProps = IAppRouterProps
type AppRouterState = IAppRouterState
interface IAppRouterProps { }
interface IAppRouterState { }

export default AppRouter;
