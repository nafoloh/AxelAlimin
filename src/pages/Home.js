import React, {useState, useEffect} from "react";
import Cards from "../containers/Cards";
import Parallax from "../containers/parallax";
import Video from "../containers/Video";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import classes from './Home.module.css'
function Home(props) {
    //Get scroll value
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY)
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    //Trigger video shrink animation
    const [TriggerSkillScroll, setTriggerSkillScroll] = useState(false)
    const TriggerSkillRef = useIntersectionObserver({threshold: .5}, entries => {
        entries.forEach(entry => {
            setTriggerSkillScroll(entry.isIntersecting)
        })
    })
    //Trigger Color change for the video -> skill cards
    const TriggerColorSkillRef = useIntersectionObserver({threshold:.5}, entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                props.setAppColor('black')
            }else {
                props.setAppColor('')
            }
        })
    })
    
    //console.log(offset)
    return (
        <div className={classes.HomePage}>
            <section>
                <Parallax offset={offset}/>
            </section>
            <section className={TriggerSkillScroll ? classes.Video : classes.VideoBackwards}>
               <Video />
            </section>
            <section className={[classes.Skills, TriggerSkillScroll ? classes.Green : ''].join(' ')}>
                <div className={classes.TriggerSkills} ref={TriggerSkillRef}></div>
                <div className={classes.TriggerColorSkills} ref={TriggerColorSkillRef}></div>
                <Cards />
            </section>
            <section className={[classes.Cards,TriggerSkillScroll ? classes.Green : ''].join(' ')}>
                
            </section>
        </div>
    );
}

export default Home;
