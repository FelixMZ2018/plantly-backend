import Button from "../General/Button";
import React, { setState, useState, useEffect } from "react";

export default function ConfirmationModal(props) {
  return (
    <div className="fixed w-full h-full bg-gray-200 flex justify-center items-center ">
      <div className="absolute bg-white z-50 flex justify-center mx-auto p-5 rounded-lg">
        <div className="justify-center text-center text-green-dark">
          {props.text}
        </div>
        <br />
        <div onClick={props.function} className="flex justify-end pt-2">
          <Button text="Delete this Plant" />
        </div>
      </div>
    </div>
  );
}
