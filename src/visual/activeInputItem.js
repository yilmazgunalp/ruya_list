import React from 'react';
import './inputItem.css';

function ActiveInputItem({order,updateTodo,clear}) {
let textInput = React.createRef();
  const [todo, setTodo] = React.useState();
  const handleChange = () => {
    if(todo && !(todo.length === 0)) {
    updateTodo(todo,order)
    }
  }
  
  React.useEffect(() => {
    textInput.current.focus() 
    },[]);

  React.useEffect(() => {
    clear && setTodo('')
    },[clear]);
  return (
    <div className="input-item ">
    <div className="order">
    {order + "."}
    </div>
    <div className="todo ">
    <input  value={todo} placeholder="something ..." ref={textInput}  onChange={(e) => setTodo(e.target.value)} onBlur={handleChange}/>
    </div>
    </div>
  );
}

export default ActiveInputItem;

