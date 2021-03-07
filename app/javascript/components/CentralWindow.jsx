import React from "react";

class CentralWindow extends React.Component {
  render() {
    return <div className="centerContainer flex flex-grow centralWindow min-h-full h-full flex-auto ">{this.props.children}</div>;
  }
}

export default CentralWindow;
