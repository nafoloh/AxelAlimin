import React from 'react'
import classes from './FancyText.module.css'
function FancyText(props) {
 const sentences = props.text.content.split('&s')
  const wordSplit = sentences.map(sentence => {
    return sentence.split(' ').map(word => {
        return word.split('')})
  })
  
 //console.log(wordSplit);
  const text = wordSplit.map((sentence) => {
    return <div className={classes.FancySentence}>{sentence.map((word)=>{
        return <p className={classes.FancyWord}>{word.map((char) => {
            return <span className={classes.FancyCharacter} >{char}</span>
    })}</p>})}</div>
  })
  //console.log(text);
  return (
    <div className={classes.Fancy}>{text}</div>
  )
}

export default FancyText