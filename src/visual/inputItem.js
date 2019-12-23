import React from 'react';
import './inputItem.css';

function InputItem({order,updateTodo,plch}) {
let textInput = React.createRef();
  const [todo, setTodo] = React.useState();
  const handleChange = () => {
    updateTodo(todo,order)
  }
  
  React.useEffect(() => {
    setTodo(plch)
    },[]);

  const ignoreTab = (e) => {
    e.keyCode === 9 && e.preventDefault()
  }


  return (
    <div className="input-item ">
    <div className="order">
    {order + "."}
    </div>
    <div className="todo ">
    <input  value={todo} ref={textInput}  placeholder={plch} onChange={() => setTodo(textInput.current.value)} onKeyDown={ignoreTab} onBlur={handleChange}/>
    </div>
    </div>
  );
}

export default InputItem;


