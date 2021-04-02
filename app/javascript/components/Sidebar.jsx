import React, { Children } from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar flex-none bg-green-dark p-2 min-h-full w-max ">
        <ul>
          <li>
            <Link to="/">
              <div className="bg-gray p-2"> Sturdy Pancake! </div>
            </Link>
          </li>
          <hr />
          <li>How to use ?</li>
          <hr />
          <li>Hardware</li>
          <hr />
          <li>F.A.Q.</li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
