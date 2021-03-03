import React from "react";

class CentralWindow extends React.Component {
  render() {
    return <div className="centralWindow flex-grow flex-auto w-5/6">{this.props.children}</div>;
  }
}

export default CentralWindow;
