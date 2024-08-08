import React from "react";

const Button = ({ text, onClick, extraClass }) => {
  return (
    <button
      className={`text-lg py-2 px-4 rounded ${extraClass}`}
      onClick={onClick}
     type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
