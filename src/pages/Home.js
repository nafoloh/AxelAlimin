import React, {useState, useEffect, useContext} from "react";
import Cards from "../containers/Cards";
import Parallax from "../containers/parallax";
import Video from "../containers/Video";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import classes from './Home.module.css'

import AppThemeContext from '../store/app-theme-context'
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
                props.setAppColor('skyblue')
                setIsScattered(false)
            }
        })
    })
    //Function to trigger card scatter
    const {setColorTheme} = useContext(AppThemeContext)
    const [isScattered, setIsScattered] = useState(false)
    const handleScatter = (handleFlip) => {
        console.log(isScattered);
        setIsScattered(prevState => {
          if (prevState) {
            setColorTheme('black')
          }else {
            setColorTheme('white')
          }
          return !prevState}
          )
      }

    return (
        <div className={classes.HomePage}>
            <section id='section-header'>
                <Parallax offset={offset}/>
            </section>
            <section className={TriggerSkillScroll ? classes.Video : classes.VideoBackwards}>
               <Video />
            </section>
            <section id='section-projects'className={[classes.Skills, TriggerSkillScroll ? classes.Green : ''].join(' ')}>
                <div className={classes.TriggerSkills} ref={TriggerSkillRef}></div>
                <div className={classes.TriggerColorSkills} ref={TriggerColorSkillRef}></div>
                <Cards isScattered = {isScattered} triggerScatter = {handleScatter}/>
            </section>
            <section className={[classes.Cards,TriggerSkillScroll ? classes.Green : ''].join(' ')}>
                
            </section>
        </div>
    );
}

export default Home;
