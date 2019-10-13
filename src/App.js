import React from 'react';
import './App.css';
import Entrance from './visual/entrance.js'
import ActionBox from './visual/action_box.js'
import Enter from './visual/enter.js'
import RuyaContext from './RuyaContext.js'


const initialState = {
  actionBox: true,
  showList: false,
  actionTitle: "Welcome to Ruya's List",
  action: () => <Enter/>
};
const UPDATE_ACTION = "UPDATE_ACTION";
const SHOW_LIST = "SHOW_LIST";

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ACTION:
      return {
        actionBox: true,
        actionTitle: action.title,
        action: action.action
      };
    case SHOW_LIST:
      return {
        actionBox: false,
      };
    default:
      return initialState;
  }
}

function App() {
 const [state, dispatch] = React.useReducer(reducer, initialState); 

  return (
    <RuyaContext.Provider value={{state, dispatch}}>
      <div className="App">
    {state.actionBox && <ActionBox header={state.actionTitle} action={() => state.action()}/>}
      </div>
    </RuyaContext.Provider>
  );
}

export default App;
