import React from "react";

class NotFound extends React.Component{
  render(){
    return(
      <div className="mr-5"><br /><br />
        <h1 className="text-danger ">404 Error</h1>
        <h1>Page not found</h1>
        <p>We could not find the page you are looking for</p>
      </div>
    )
  }
}

export default NotFound;