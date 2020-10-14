import React from "react";

export const Screen = (props) => {

    return (
        <div className={props.className}>
            {props.value}
        </div>
    )
}