import React from 'react';
import './enter.css';
import Chiper from './chiper.js'
import RuyaContext from '../RuyaContext.js'
const UPDATE_ACTION = "UPDATE_ACTION";


function Enter() {
  const { dispatch } = React.useContext(RuyaContext);
  const [animate, setAnimation] = React.useState('');
  const onClick = () => {
       setAnimation('animate') ;
       setTimeout(() => dispatch({type: UPDATE_ACTION, title:"Say friend and Enter", action: () => <Chiper count="6" answer="friend"/> }), 4000) 
   }

 return (
  <React.Fragment>
    <button className="retne-button" onClick={onClick}>
    <span className={animate + " letters"} id="R">R</span>
    <span className={animate + " letters"} id="E">E</span>
    <span className={animate + " letters"} id="T">T</span>
    <span className={animate + " letters"} id="N">N</span>
    <span className={animate + " letters"} id="E2">E</span>
    </button>
  </React.Fragment>
  )
}

export default Enter;

