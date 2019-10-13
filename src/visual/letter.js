import React from 'react';
import './letter.css';

function Letter({setFocus,order,count,joinLetters, checkAnswer, clear}) {
let textInput = React.createRef();
const update = () =>  {
 joinLetters(prev =>  prev.slice(0,order -1).concat(textInput.current.value).concat(prev.slice(order,count)))

if(order < count) {
setFocus({elm: textInput.current.parentElement.nextSibling.firstChild});
}

if(order ==  count) {
checkAnswer(true)
}
}
  React.useEffect(() => {
    if(order == 1){
        setFocus({elm: textInput.current,order});
      }
  }, [clear])

  React.useEffect(() => {
      textInput.current.value = ''
  },[clear])

    return (
    <li>
     <input type="text" id="name" name="name" required
       minLength="1" maxLength="1" size="1" ref={textInput} onInput={update}/> 
      <hr className="blip" />
      </li>
  );
}

export default Letter;

