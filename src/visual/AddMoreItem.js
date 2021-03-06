import React from 'react';
import './addmoreItem.css';

function AddMoreItem({placeholder}) {
  return (
    <div className="addmore-item">
    <div className="addmore-plus">
   <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29297 5.02692L12.582 4.88629L12.1074 8.63043L8.11719 8.36676L7.81836 13.5875L4.83008 13.4117L4.72461 8.15582L0.365234 7.87457L0.558594 5.23785L4.6543 5.13239L4.58398 0.157776L8.53906 0.49176L8.29297 5.02692Z" fill="black"/>
</svg>
 
    </div>
    <div className="addmore-todo">
    <addmore type="text" placeHolder={placeholder}/>
    </div>
    </div>
  );
}

export default  AddMoreItem;

