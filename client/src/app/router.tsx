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
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "../features/chatbot/classes/ActionProvider ";
import MessageParser from "../features/chatbot/classes/MessageParser";
import Config from "../features/chatbot/classes/config";
import Sale from "./menu/componnent/sale";
import Renting from "./menu/componnent/renting";
import Leasing from "./menu/componnent/leasing";
import About from "./menu/componnent/about";
import Login from "../features/admin/sign/login";
import Register from "../features/admin/sign/register";
import NotFound from "./menu/componnent/NotFound";


class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home/>} key="home" />,
                            <Route path="/Sale" element={<Sale />} key="sale" />,
                            <Route path="/Renting" element={<Renting />} key="renting" />,
                            <Route path="/Leasing" element={<Leasing />} key="leasing" />,
                            <Route path="/About" element={<About />} key="about" />,
                            <Route path="/users/login" element={<Login />}  key="login"/>,
                            <Route path="/users/register" element={<Register />}  key="register"/>,
                            <Route path="/*" element={<NotFound />} key="notFound"/>
                            // <Route path="/Data" element={<Data />} key="data" />,
                            // <Route path="/Request" element={<TableRequests />} key="data" />,
                            // <Route path="/*" element={<NotDefindeMenuChild />} key="notDefindeMenuChild" />
                        ]} />
                    </Routes>
                </Router>
                {/* <div className="appChatbotContainer">
                    <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div> */}
            </div>
        );
    }
}

type AppRouterProps = IAppRouterProps
type AppRouterState = IAppRouterState
interface IAppRouterProps { }
interface IAppRouterState { }

export default AppRouter;
