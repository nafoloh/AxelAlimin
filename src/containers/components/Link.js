import React from "react";
import classes from "./Link.module.css";
const LinkPersonal = (props) => {
    let active = props.active === props.id ? classes.active : "";
    return (
        <li>
            <button
                onClick={props.handleClick}
                className={[classes.Link, active].join(" ")}
                id={props.id}
            >
                {props.children}
            </button>
        </li>
    );
};

export default LinkPersonal;
