"use client";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const initialItems = [
  { id: "item-0", content: "Item 1" },
  { id: "item-1", content: "Item 2" },
  { id: "item-2", content: "Item 3" },
];

const TodoDrag = () => {
  const [items, setItems] = useState(initialItems);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    console.log("Drag result:", result);

    const { source, destination } = result;

    if (!destination) {
      console.log("No destination found");
      return;
    }

    if (source.index === destination.index) {
      console.log("No change in order");
      return;
    }

    const reorderedItems = reorder(items, source.index, destination.index);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided) => (
          <div
            className="p-8 m-8 w-[250px] bg-[#e3a2a2]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: "16px",
                      marginBottom: "8px",
                      background: "#fff",
                      borderRadius: "4px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      ...provided.draggableProps.style,
                      ...provided.dragHandleProps.style,  // Add this if necessary
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoDrag;
