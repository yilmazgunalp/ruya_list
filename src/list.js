import React from 'react';
import './list.css';
import ListItem from './visual/listItem.js'
import CrazeHeader from './visual/crazeHeader.js' 
import Addbutton from './visual/addButton.js' 
import Chiper from './visual/chiper.js' 
import DotsBox from './visual/dotsBox.js' 
import RuyaContext from './RuyaContext.js'
import {UPDATE_ACTION} from './Constants.js'

function List({}) {
  const {dispatch} = React.useContext(RuyaContext);
  
  const [pagination, paginate] = React.useState({showDots: false,index: null, maxElements: 0});
  const [todos, updateTodos] = React.useState([]);
let thelistdiv = React.createRef();

  React.useEffect(() => {
    console.log( 'inside')
    fetch('http://localhost:5000/db')
    .then(resp => {
      console.log( resp)
      if(resp.ok) {
   console.log( resp)
      resp.json().then(results => {
        console.log( results.results)
    updateTodos(results.results.map(todo => <ListItem order={todo.id} key={todo.id} todo={todo.todo}/>))
      })
    
    }})
    .catch(e => console.log(e))
  },[]);

  React.useEffect(() => {
    const maxElements = (thelistdiv.current.clientHeight - 225)/52;
    const showDots = maxElements < todos.length;
    const index = showDots ? maxElements : null;
    
    paginate({showDots, index, maxElements})
  },[pagination.index])

  return (
    
    <div className="the-list" ref={thelistdiv} onTouchStart={() => console.log( "you touched me!!!")}>
    <CrazeHeader title="Things Ruya will do"/>
    <ul className="todo-list">{pagination.index ? todos.slice(0,pagination.maxElements) : todos}</ul>
    {pagination.showDots && <DotsBox/>}
    <Addbutton title="Only Ruya can click here!" handleClick={() => dispatch({type: UPDATE_ACTION, title: "..he has button for his eyes.. and he likes to wear green...", actionToShow: (ab_dispatch,blur) => <Chiper count="7" answer="cuddles" onSuccessAction={ab_dispatch} name="cuddles" blr={blur}/> })} />
    </div>
  );
}

export default List;

