import { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/bootstrap.min.css";
import "../../../css/style.css";
class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bg-dark">
        <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white img-bg">
          <div className=" border border-3 border-warning w-25 h-25 m-3 p-2 pt-3 img-sale">
            <Link className="nav-link px-2 text-white" to="/Sale">
              <h1>Sale</h1>
            </Link>
          </div>
          <div className=" border border-3 border-warning w-25 h-25 m-3 p-2 pt-3 img-renting">
            <Link className="nav-link px-2 text-white" to="/Sale">
              <h1>Renting</h1>
            </Link>
          </div>
          <div className=" border border-3 border-warning w-25 h-25 m-3 p-2 pt-3 img-leasing">
            <Link className="nav-link px-2 text-white" to="/Sale">
              <h1>Leasing</h1>
            </Link>
          </div>
        </div>
        {/* <img className="bi mx-3 " width="100" src="logo-car.svg" alt="" />
        <h1 className="text-white">Popular cars</h1> */}
      </div>
    );
  }
}

type HomeProps = IHOmeProps;
type HomeState = IHOmeState;
interface IHOmeProps {}
interface IHOmeState {}

export default Home;
