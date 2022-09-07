import { Component, ReactNode } from "react";
import WithRouter, { IWithRouterProps } from "../../../app/with-router";



class ChatBotPage extends Component {

  constructor(props: IWithRouterProps) {
    super(props);
   
  }

  render() : ReactNode{
   
    return (
      <div>       
      </div>
    );
  }

}
export default WithRouter(ChatBotPage);



