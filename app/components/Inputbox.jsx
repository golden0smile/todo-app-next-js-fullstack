import React from 'react'

const Inputbox = ({onChange,value}) => {
  return (

      <input
        type="text"
        name='title'
        placeholder="Add Title..."
        className="border-2 border-gray-500 w-full p-2"
        onChange={onChange}
        value={value}
      />
   
  )
}

export default Inputbox
