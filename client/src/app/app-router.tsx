import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import ItemDetailsWithRouter from "../items/componnent/item-details";
import EditItem from "../items/componnent/edit-item";
import AddItem from "../items/componnent/add-item";
import NotDefindeMenuChild from "../menu/componnent/not-definde-menu-child";
import Home from "../menu/componnent/home";
import Menu from "../menu/componnent/menu";
import Data from "../menu/componnent/data";


class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home/>} key="home" />,
                            <Route path="/Data" element={<Data />} key="data" />,
                            <Route path='/itemDetailse/:id' element={<ItemDetailsWithRouter />} key="itemDetailse" />,
                            <Route path='/editItem/:id' element={<EditItem />} key="editItem" />,
                            <Route path="/addItem"
                                element={<AddItem />}
                                key="addItem" />,
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
