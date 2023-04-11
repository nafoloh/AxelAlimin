import React, { useContext, useEffect, useState } from 'react'
import classes from './Cards.module.css'
import Card from './components/Card'

const CARDS_LIST = [{
  id : 1,
  name : 'Card1'
}, {
  id: 2,
  name: 'Card2'
}, {
  id:3,
  name: 'Card3'
}, {
  id:4,
  name: 'Card4'
}, {
  id:5,
  name: 'Card5'
}]
function Cards(props) {
  const [ButtonSide, setButtonSide] = useState({Front: '', Back: ''})
  //console.log(props.isScattered);
  //Run this function everytime the isScattered value change from events is Home.js
  useEffect(() => { 
    if(props.isScattered) {
      setButtonSide({Front: classes.FrontDeactivate, Back:classes.BackActivate})
    }else {
      setButtonSide({Front: classes.FrontActivate, Back: classes.BackDeactivate})
    }
  }, [props.isScattered])
 
  return (
    <div className={classes.Cards} >
      <div className={[classes.Button,classes.ButtonFront,ButtonSide.Front].join(' ')} onClick={props.triggerScatter}>PROJECTS<span>Press Here</span></div>
      <div className={[classes.Button,classes.ButtonBack,ButtonSide.Back].join(' ')} onClick={props.triggerScatter}></div>
      {CARDS_LIST.map((card) => (
        <Card isScattered= {props.isScattered} key={card.id} name={card.name} id={card.id}>Coming Soon!</Card>
      ))}
     
    </div>
  )
}

export default Cards
/**
 * *This function accepts the triggerScatter and isScatter props. TriggerScatter to cause the cards to scatter and
 * isScatter whether the cards are currently scattered or not.
 * isScattered is passed to the Card component as prop and each card will animate its scatter animation.
 * The button will animate depending on the current isScattered state. 
 * Depending on the state, the specific css classes is applied.
 */

