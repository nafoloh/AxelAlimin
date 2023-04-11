import React, { useEffect, useState } from "react";
import classes from "./parallax.module.css";

import bg from "../img/bg.jpg";
import LinkList from "./components/LinkList";
import FancyText from "./components/FancyText";

const entries = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Summary" },
    { id: 3, name: "Contact" },
];
function Parallax(props) {
    //Get Active
    const [active, setActive] = useState(1);
    const handleClick = (e) => {
        setActive(+e.target.id);
    };
    // useEffect(() => {
    //   console.log('new interval');
    //   const interval = setInterval(() => {
    //     setActive(prevActive => { 
    //       if (prevActive < 3) {
    //         return prevActive + 1
    //       }else {
    //         return 1
    //       }
    //     })
    //   }, 3000)
    //   return () => {
    //     console.log('clearing');
    //     clearInterval(interval)}
    // }, [])
    
    const BgStyle = { top: props.offset * 0.5 + "px" };
    return (
        <div className={classes.Section_header}>
            <img src={bg} alt="bg" className="bg" style={BgStyle} />
            <div className={classes.Content}>
                <div className={classes.Sidebar}>
                    <p >Axel Alexander Alimin</p>
                    <div className={classes.Linklist}>
                        <LinkList
                            List={entries}
                            active={active}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
                <div className={classes.BigLetters}>
                    {active === 1 ? (
                      <FancyText text={{ content: 'axel alimin, &sweb developer' }} />
                      // <React.Fragment>
                      //   <div className={classes['BigLetters-Row']}>
                      //     
                      //   </div>
                      //   <div className={classes['BigLetters-Row']}>
                      //     <FancyText text={{ content: "web developer " }} />
                      //   </div>
                      // </React.Fragment>
                    ) : active === 2 ? (
                        <div>email</div>
                    ) : (
                      <FancyText text={{ content: "+852-51650132 &saxelalimin @gmail.com" }} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Parallax;
