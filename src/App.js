import React from 'react';
import './App.css';
import Entrance from './visual/entrance.js'
import ActionBox from './visual/action_box.js'
import Enter from './visual/enter.js'
import List from './list.js'
import Form from './form.js'
import RuyaContext from './RuyaContext.js'
import {UPDATE_ACTION, SHOW_LIST,SHOW_FORM} from './Constants.js'


const initialState = {
  actionBox: true,
  showList: false,
  showForm: false,
  actionTitle: "Welcome to Ruya's List",
  actionToShow: (ab_dispatch,blr) => <Enter ab_dispatch={ab_dispatch}/>
};

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ACTION:
      return {
        actionBox: true,
        actionTitle: action.title,
        actionToShow: action.actionToShow
      };
    case SHOW_LIST:
      return {
        actionBox: false,
        showList: true
      };
    case SHOW_FORM:
      return {
        actionBox: false,
        showList: false,
        showForm: true
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
    {state.actionBox && <ActionBox header={state.actionTitle} action={(ab_dispatch,blr) => state.actionToShow(ab_dispatch,blr)}/>}
    {state.showList && <List />}
    {state.showForm && <Form />}
      </div>
    </RuyaContext.Provider>
  );
}

export default App;
