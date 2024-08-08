import React from "react";

const Textarea = ({onChange,value}) => {
  return (
    
      <textarea
        name="description"
        row="2"
        placeholder="Add a new task..."
        className="border-2 border-gray-500 w-full p-2"
        onChange={onChange}
        value={value}
      />
  
  );
};

export default Textarea;
