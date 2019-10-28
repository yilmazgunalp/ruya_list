import React from 'react';
import './action_box.css';
import RuyaContext from '../RuyaContext.js'
import Success from './success.js'
import Failure from './failure.js'
import {UPDATE_ACTION, SHOW_LIST} from '../Constants.js'

function ActionBox({header,action}) {
  const {dispatch} = React.useContext(RuyaContext);
  const [blur, setBlur] = React.useState();
const initialState = {
  failMessage: false,
  successMessage: false,
  successful: false,
  name: '',
  blur: ''
};
function reducer(state, action) {
  switch (action.type) {
    case "RESULT":
      return {
      failMessage: action.failMessage,
      successMessage: action.successMessage,
      successful: action.successful,
      name: action.name,
      blur: action.blur
      };
    break;
    default:
      return initialState;
  }
}
 const [state, ab_dispatch] = React.useReducer(reducer, initialState); 

  React.useEffect(() => {
  switch (state.name) {
    case "friend":
      state.successful && dispatch({type: SHOW_LIST})
      break;
    case "cuddles":
      state.successful && ab_dispatch({type: "RESULT", successMessage: true})
      !state.successful && ab_dispatch({type: "RESULT", failMessage: true, blur: 'blur'})

      break;
  }
      
    },[state.successful,state.name]);
  return (
    <div className="action-box-wrapper" onClick={() => ab_dispatch({type: "RESULT",failMessage: false, blur: ''})}>
    <h1 className={state.blur}>{header}</h1>
    <div className={"action-wrapper " + state.blur}>
    {action(ab_dispatch,state.blur === 'blur' ? true  : false)}
    </div>
    {state.failMessage && <Failure/>}
    {state.successMessage && <Success message="!!!yay!!!"/>}
    </div>
  )
}

export default ActionBox;

