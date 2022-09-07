import { Component } from "react";
import { Outlet } from "react-router-dom";


class Home extends Component<HomeProps, HomeState>{
  constructor(props: HomeProps) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

type HomeProps = IHOmeProps;
type HomeState = IHOmeState
interface IHOmeProps { }
interface IHOmeState { }

export default Home;
