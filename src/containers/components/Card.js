import React, { useState } from 'react'
import classes from './Card.module.css'
function Card(props) {
    
    const activate = props.isScattered ? classes[`active${props.id}`] : ''
    return (
    <div className={[classes.Card,classes[`${props.name}`], activate].join(' ')} >{props.children}</div>
  )
}

export default Card