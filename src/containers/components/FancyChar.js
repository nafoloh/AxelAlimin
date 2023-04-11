import React, {useState} from 'react'
import classes from './FancyText.module.css'
function FancyChar(props) {
 const [animationActive, setAnimationActive] = useState(false)
  const hoverHandler = () => {
    setAnimationActive(true)
  }
  const animationEndHandler = () => {
    setAnimationActive(false)
  }
  return (
    <span onMouseOver={hoverHandler} onAnimationEnd={animationEndHandler} className={[classes.FancyCharacter, animationActive ? classes.PlayAnimation: ''].join(' ')} >{props.children}</span>
  )
}

export default FancyChar