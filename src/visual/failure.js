import React from 'react';
import './failure.css';

function Failure({message}) {
  return (
    <div className="failure">
    {message}
    </div>
  );
}

export default Failure;

