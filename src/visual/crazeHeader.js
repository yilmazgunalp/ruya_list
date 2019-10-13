import React from 'react';
import './crazeHeader.css';

function CrazeHeader({title}) {
  return (
    <h1 className="craze-header">
    {title}
    </h1>
  );
}

export default CrazeHeader;
