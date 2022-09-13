import { Component } from "react";
import { Outlet } from "react-router-dom";
import WithRouter, { IWithRouterProps } from "../../with-router";


const Data = WithRouter(
    class DataWithoutRouter extends Component<DataProps, DataState>{
        constructor(props: DataProps) {
            super(props);
            this.state = {}
        }

        render() {
            const { navigate } = this.props
            return (
                <div>
                    <button onClick={() => { navigate("/addItem") }}>add item</button>
                    <Outlet />
                </div>
            );
        }
    }
)

type DataProps = IDataProps & IWithRouterProps;
type DataState = IDataState
interface IDataProps { }
interface IDataState { }

export default Data;
