import React from 'react';
import './chiper.css';
import Letter from './letter.js';

function Chiper({count,answer,onSuccessAction,name,blr}) {
  const [focusElm, setFocus] = React.useState();
  const [userAnswer, joinLetters] = React.useState(new Array(count));
  const [completed, checkAnswer] = React.useState(false);
  const [animate, setAnimation] = React.useState('');
  const [clear, toggleClearInput] = React.useState(false);
  React.useEffect(() => {
    if(focusElm){
      focusElm.elm.value = ''
      !blr && focusElm.elm.focus();
    }},[focusElm,blr]);

  React.useEffect(() => {
    if(completed) {
      let answerIsCorrect = answer === userAnswer.join('');
      if(answerIsCorrect ){
        onSuccessAction({type: "RESULT", successful: true, name })
      } else {
       checkAnswer(false)
       toggleClearInput(prev => !prev)   
       onSuccessAction({type: "RESULT", successful: false, name })
       name === 'friend' &&  setAnimation('animate')
       setTimeout(() => setAnimation(''), 700)
        
      } 
    }
  },[completed])

  const letters = [];

  for(let i = 0; i < count;  i++) {
    letters.push(<Letter key={i + 1} order={i + 1} count={count} setFocus={setFocus} joinLetters={joinLetters} checkAnswer={checkAnswer} clear={clear}/>) 
  }

  return (
    <ul className={"chiper-list " + animate}>{letters}</ul>
  );

}

export default Chiper;

