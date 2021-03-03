import React from "react";

class CentralWindow extends React.Component {
  render() {
    return <div className="centralWindow flex-grow bg-green-light">{this.props.children}</div>;
  }
}

export default CentralWindow;
