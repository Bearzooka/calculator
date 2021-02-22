import React from "react";

export const Screen = (props) => {

    return (
        <div className={props.className + "-screen"}>
            {props.value}
        </div>
    )
}