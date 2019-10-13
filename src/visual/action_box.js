import React from 'react';
import './action_box.css';

function ActionBox({header,action}) {
  return (
    <div className="action-box-wrapper">
    <h1>{header}</h1>
    <div className="action-wrapper">
    {action()}
    </div>
    </div>
  )
}

export default ActionBox;

