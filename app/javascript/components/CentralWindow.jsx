import React from "react";

class CentralWindow extends React.Component {
  render() {
    return <div className="centralWindow min-w-0 w-5/6 flex-auto lg:static lg:max-h-full lg:overflow-visible">{this.props.children}</div>;
  }
}

export default CentralWindow;
