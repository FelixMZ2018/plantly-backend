import React from "react";

class CentralWindow extends React.Component {
  render() {
    return <div className="centralWindow flex-grow">{this.props.children}</div>;
  }
}

export default CentralWindow;
