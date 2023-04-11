import React, { useEffect, useState } from 'react'
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
function Cards() {
  const [isScattered, setIsScattered] = useState(false)
  const [ButtonSide, setButtonSide] = useState({Front: '', Back: ''})
  const handleScatter = () => {
    console.log(isScattered);
    setIsScattered(prevState => {
      handleFlip(!prevState)
      return !prevState}
      )
  }
  const handleFlip = (scatter) => {
    if(scatter) {
      setButtonSide({Front: classes.FrontDeactivate, Back:classes.BackActivate})
    }else {
      setButtonSide({Front: classes.FrontActivate, Back: classes.BackDeactivate})
    }
  }
  return (
    <div className={classes.Cards} >
      <div className={[classes.Button,classes.ButtonFront,ButtonSide.Front].join(' ')} onClick={handleScatter}></div>
      <div className={[classes.Button,classes.ButtonBack,ButtonSide.Back].join(' ')} onClick={handleScatter}></div>
      {CARDS_LIST.map((card) => (
        <Card isScattered= {isScattered} key={card.id} name={card.name} id={card.id}>card</Card>
      ))}
     
    </div>
  )
}

export default Cards