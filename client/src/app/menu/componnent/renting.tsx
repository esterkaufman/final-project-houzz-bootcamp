import { Component } from "react";

class Renting extends Component<RentingProps, RentingState>{
  constructor(props: RentingProps) {
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

type RentingProps = IRentingProps;
type RentingState = IRentingState
interface IRentingProps { }
interface IRentingState { }

export default Renting;
