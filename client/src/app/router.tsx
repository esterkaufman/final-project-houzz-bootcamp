import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Data from "./menu/componnent/data";
import Home from "./menu/componnent/home";
import Menu from "./menu/componnent/menu";
import TableRequests from "../features/support-system/TableRequests";
import AnswerDialog from "../features/support-system/AnswerDialog";
import NotDefindeMenuChild from "./menu/componnent/not-definde-menu-child";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "../features/chatbot/classes/ActionProvider ";
import MessageParser from "../features/chatbot/classes/MessageParser";
import Config from "../features/chatbot/classes/config";


class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home/>} key="home" />,
                            <Route path="/Data" element={<Data />} key="data" />, 
                            <Route path="/Request" element={<TableRequests />} key="data" />, 
                            <Route path="/Answer" element={<AnswerDialog />}  key="data" />, 
                            <Route path="/notDefindeMenuChild" element={<NotDefindeMenuChild />} key="notDefindeMenuChild" />
                        ]} />
                    </Routes>
                </Router>
                <div className="appChatbotContainer">
                    <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>
            </div>
        );
    }
}

type AppRouterProps = IAppRouterProps
type AppRouterState = IAppRouterState
interface IAppRouterProps { }
interface IAppRouterState { }

export default AppRouter;
