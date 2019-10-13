import React from 'react';
import './chiper.css';
import Letter from './letter.js';
import RuyaContext from '../RuyaContext.js'

function Chiper({count,answer}) {
  const [focusElm, setFocus] = React.useState();
  const [userAnswer, joinLetters] = React.useState(new Array(count));
  const [completed, checkAnswer] = React.useState(false);
  const {dispatch} = React.useContext(RuyaContext);
  const [animate, setAnimation] = React.useState('');
  const [clear, toggleClearInput] = React.useState(false);
  const SHOW_LIST = "SHOW_LIST";

  React.useEffect(() => {
    if(focusElm){
      focusElm.elm.focus();
    }},[focusElm]);

  React.useEffect(() => {
    if(completed) {
      let answerIsCorrect = answer === userAnswer.join('');
      if(answerIsCorrect ){
      dispatch({type: SHOW_LIST})  
      } else {
       checkAnswer(false)
       toggleClearInput(prev => !prev)   
      setAnimation('animate')
       setTimeout(() => setAnimation(''), 2000)
        
      } 
    }
  },[completed])

  const listItems = [];

  for(let i = 0; i < count;  i++) {
    listItems.push(<Letter key={i + 1} order={i + 1} count={count} setFocus={setFocus} joinLetters={joinLetters} checkAnswer={checkAnswer} clear={clear}/>) 
  }

  return (
    <ul className={"chiper-list " + animate}>{listItems}</ul>
  );

}

export default Chiper;

