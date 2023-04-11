import React, {useState, useEffect, useContext} from "react";
import Cards from "../containers/Cards";
import Parallax from "../containers/parallax";
import Layout from "../containers/Layout";
import Video from "../containers/Video";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import classes from './Home.module.css'
import { useDetectScroll } from "@smakss/react-scroll-direction";
import AppThemeContext from '../store/app-theme-context'
function Home(props) {
    const [scrollDir] = useDetectScroll({})
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
        <Layout scrollDir={scrollDir}>
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
            <section id='section-contact' className={classes.Contact}>
                Under Construction
            </section>
        </div>
        </Layout>
    );
}

export default Home;
