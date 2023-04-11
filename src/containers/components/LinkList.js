import React from "react";
import LinkPersonal from "./Link";
import classes from "./LinkList.module.css";
function LinkList({ List, active, handleClick }) {
    
    const Links = List.map((entry) => (
        <LinkPersonal
            key={entry.id}
            id={entry.id}
            active={active}
            handleClick={handleClick}
      
        >
            {entry.name}
        </LinkPersonal>
    ));
    return <ul className={classes.LinkList}>{Links}</ul>;
}

export default LinkList;
