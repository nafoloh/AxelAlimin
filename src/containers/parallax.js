import React, { useEffect, useState } from "react";
import classes from "./parallax.module.css";

import bg from "../img/bg.jpg";
import LinkList from "./components/LinkList";
import FancyText from "./components/FancyText";

const entries = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Contact" },
];
function Parallax(props) {
    //Get Active Link
    const [active, setActive] = useState(1)
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
                    
                    <div className={classes.Linklist}>
                        <LinkList
                            List={entries}
                            active={active}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
               
                <div className={classes.BigLetters}>
                    {active === 1 ? (<div key='intro1'className={[classes.FadeText, active === 1 ? classes.FadeIn : ''].join(' ')}>
                        <FancyText text={{ content: 'Axel Alimin, &sweb developer.' }} />
                        <p className={classes.HeaderText}>I am a BSc Creative Media Graduate from the City University of Hong Kong. I have a passion for learning new things with a growth mindset.</p>
                    </div>
                      
                    ) : active === 2 ? (
                        <div key='intro2' className={[classes.FadeText, active === 2 ? classes.FadeIn : ''].join(' ')}>
                        <FancyText text={{ content: 'Skills, Interests&sand more.' }} />
                        <p className={classes.HeaderText}>I am able to program with the Javascript language and use the React library. I also use graphic software such as Photoshop and Illustrator. My interests includes back-end systems and its implementations.</p>
                    </div>
                    ) : (
                        <div key='intro3'className={[classes.FadeText, active === 3 ? classes.FadeIn : ''].join(' ')}>
                      <FancyText text={{ content: "Contact me. " }} />
                      <p className={classes.HeaderText}>Email: axelalimin@gmail.com <br></br>Phone: +852 51650132 .<br></br>(Contact page in the future)</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Parallax;
