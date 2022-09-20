import { Component } from "react";

class Sale extends Component<SaleProps, SaleState>{
  constructor(props: SaleProps) {
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

type SaleProps = ISaleProps;
type SaleState = ISaleState
interface ISaleProps { }
interface ISaleState { }

export default Sale;
