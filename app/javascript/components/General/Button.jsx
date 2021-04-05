import React from "react";

function Button(props) {
  return (
    <div className="p-2 m-4 bg-green-dark inline rounded-md shadow-lg hover:shadow-sm cursor-pointer ">
      {props.text}
    </div>
  );
}

export default Button;
