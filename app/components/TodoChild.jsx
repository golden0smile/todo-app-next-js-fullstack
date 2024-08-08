import React from "react";

const TodoChild = ({ data, onDelete, onUpdate, onComplete }) => {
  console.log({ data });
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data._id}
      </th>
      <td className="px-6 py-4">{data.title}</td>
      <td className="px-6 py-4">{data.description}</td>
      <td className="px-6 py-4">
        {data.isCompleted ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4">
        <button
          className="text-sm px-2 mx-2 py-1 bg-green-400 hover:bg-green-500 text-white rounded"
          onClick={() => {
            onComplete(data.id);
          }}
        >
          {data.isCompleted ? " Take in Progress" : "Mark as Completed"}
        </button>
        <button
          className="text-sm px-2 mx-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
          onClick={() => {
            onUpdate(data._id);
          }}
        >
          Edit Todo
        </button>
        <button
          className="text-sm px-2 py-1 bg-red-400 hover:bg-red-500 text-white rounded"
          onClick={() => {
            onDelete(data._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoChild;
