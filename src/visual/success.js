import React from 'react';
import './success.css';

function Success({message}) {
  const [msg, showMessage] = React.useState(false);
  const cat = <img className="walk" src="./catc.gif" alt="this slowpoke moves"  width="250"/>
  const yay = <img src="./yayred.gif" alt="this slowpoke moves"  width="180"/>
  const [animate, setAnimation] = React.useState('');

  React.useEffect(() => {
setTimeout(() => showMessage(true),8000)
  },[])

  return (
    <div className={"success " + (!msg && "cat")}>
    {!msg && cat} 
    {msg && yay}
    </div>
  );
}

export default Success;

