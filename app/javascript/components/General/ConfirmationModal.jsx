import Button from '../General/Button'
import React, { setState, useState, useEffect } from "react";


export default function ConfirmationModal(props) {
    return (
        <div>
            {props.text}
            <div onClick={props.function} className="flex justify-end pt-2">
            <Button text="Delete this Plant" />
          </div>
        </div>
    )
}
