import React from 'react';
import './form.css';
import ListItem from './visual/listItem.js'
import InputItem from './visual/inputItem.js'
import ActiveInputItem from './visual/activeInputItem.js'
import PlusItem from './visual/plusItem.js'
import CrazeHeader from './visual/crazeHeader.js' 
import Addbutton from './visual/addButton.js' 
import RuyaContext from './RuyaContext.js'
import {UPDATE_ACTION, SHOW_LIST} from './Constants.js'

function Form({count = 10}) {
  const {dispatch} = React.useContext(RuyaContext);
  const [todos,activeTodo, upsertTodo, addTodo ] = useTodosHook(count);
  const submit = () => {
    console.log( 'helllo')
    fetch('http://localhost:5000/add',{
          method: 'POST',
          //mode: 'cors',
       headers: {
      //'Content-Type': 'application/json'
       //'Content-Type': 'application/x-www-form-urlencoded',
    },
          body: JSON.stringify({data: todos.concat(activeTodo)})
    })
    .then(resp => {if(resp.ok) dispatch({type: SHOW_LIST})})
    .catch(e => console.log(e)) 
  
  }

  return (
    <div className="the-form" >
    <CrazeHeader title="What would you like to do?"/>
    {todos.map((todo,i) => <InputItem key={i} order={count+1+i} plch={todo} updateTodo={upsertTodo}/> )}
    <ActiveInputItem order={count + todos.length + 1}   clear={!activeTodo} updateTodo={upsertTodo}/>
    <PlusItem plch="something else..." enabled={activeTodo} addTodo={addTodo}/>
    <Addbutton title="Add to List!" handleClick={submit} />
    </div>
  );
}

export default Form;

const useTodosHook = (count)  => {
  const [todos, setTodos] = React.useState([]);
  const [activeTodo, setActivetodo] = React.useState();
  const upsertTodo = (todo,order) =>  {
    if(order === todos.length + count + 1){
      setActivetodo(todo)
    } else {
      
      let newState = todos; 
      newState[order-count-1] = todo;
      console.log( 'newState', newState)
      setTodos(newState)
      
    }  
}
 const addTodo = () => {
 setTodos(todos.concat([activeTodo])) 
   setActivetodo('')
 
 }
  return [todos,activeTodo,upsertTodo, addTodo]
}

