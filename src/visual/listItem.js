import React from 'react';
import './listItem.css';

function ListItem({order,todo}) {
  return (
    <div className="list-item">
    <div className="order">
    {order}.
    </div>
    <div className="todo">
    {todo}
    </div>
    </div>
  );
}

export default ListItem;

