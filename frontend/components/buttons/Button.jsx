import React from "react";

const Button = ({className,title,onClick}) => {
  return <button onClick={onClick} className={`px-5 py-2 rounded-xl  ${className}`}>{title}</button>;
};

export default Button;
