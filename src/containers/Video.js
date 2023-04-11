import React , {useCallback, useEffect, useRef, useState} from 'react'
import BgVideoWebM from '../assets/bg.webm'
import BgVideoMP4 from '../assets/bg.mp4'
import SnowPNG from '../assets/snow.png'
import classes from './Video.module.css'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

function Video() {
    //Video
    const videoRef = useRef(null)
    const [style, setStyle] = useState('')
    const onScroll = useCallback(() => {
        const windowHeight = window.innerHeight
        //console.log(videoRef.current)
        const elementTop = videoRef.current?.getBoundingClientRect().top
        const elementVisible = 400
        
        if(elementTop < windowHeight - elementVisible) {
            setStyle(classes.active)
        }else {
            setStyle('')
        }
    },[videoRef, setStyle])
    useEffect(() => {
        console.log('part rerendered')
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [onScroll]) 


    //Hidden scroll
    const [hiddenScroll, setHiddenScroll] = useState(false)
    const scrollRef = useIntersectionObserver({threshold: .2}, entries => {
        entries.forEach(entry => {
            setHiddenScroll(entry.isIntersecting)
        })
    })
    let textStyle
    if (hiddenScroll) {
        textStyle = [classes.Text, classes.Reveal, classes.active].join(' ')
    } else {
        textStyle = [classes.Text, classes.Reveal].join(' ')
    }
  return (
    <React.Fragment>
    <div className={classes.Header}  ref = {videoRef}>
        <video autoPlay muted loop className={[classes.Video, classes.Reveal, style].join(' ')} >
            <source src={BgVideoWebM} type="video/webm" />
            <source src={BgVideoMP4} type="video/mp4" />
            Your browser is not supported!
        </video>
        <img src={SnowPNG} alt="snowVillage" className={classes.Snow}/>
        <h2 className={textStyle}>HELLO!</h2>
    </div>
    <div className={classes.ScrollText} ref={scrollRef}>
        {/*hiddenScroll && <h2 >Axel</h2>*/}
    </div>
    </React.Fragment>
  )
}

export default Video