import { Component } from "react";

class About extends Component<AboutProps, AboutState>{
  constructor(props: AboutProps) {
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

type AboutProps = IAboutProps;
type AboutState = IAboutState
interface IAboutProps { }
interface IAboutState { }

export default About;
