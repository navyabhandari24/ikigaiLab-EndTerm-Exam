import React from 'react';

const Button = ({ value, onClick }) => (
  <button className="flex-fill m-2 py-4 px-3" onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Button;
