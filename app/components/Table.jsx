import React from "react";
import TodoChild from "./TodoChild";

const Table = ({ data, onDelete, onUpdate,onComplete }) => {
  return (
    <div className="relative overflow-x-auto  py-20 m-auto w-[80%]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Discription
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((x) => (
            <TodoChild data={x} onDelete={onDelete} onUpdate={onUpdate} onComplete={onComplete}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
