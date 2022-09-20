import { Component } from "react";

class Leasing extends Component<LeasingProps, LeasingState>{
  constructor(props: LeasingProps) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

type LeasingProps = ILeasingProps;
type LeasingState = ILeasingState
interface ILeasingProps { }
interface ILeasingState { }

export default Leasing;
