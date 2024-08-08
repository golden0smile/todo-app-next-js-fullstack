"use client";
import "react-toastify/dist/ReactToastify.css";
import Inputbox from "./components/Inputbox";
import Textarea from "./components/Textarea";
import Button from "./components/Button";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    // Add todo to your database

    e.preventDefault();
    if (editId) {
      try {
        await axios.put("/api", {
          id: editId,
          title: formData.title,
          description: formData.description,
        });
        toast.success("Todo updated successfully!");
        getAllTodos();
      } catch (error) {
        toast.error("Error updating todo!");
        console.error("Error:", error);
      }
    } else {
      try {
        const res = await axios.post("/api/", formData);

        toast.success("Todo added successfully!");
      } catch (error) {
        toast.error("Error adding todo!");
        console.error("Error:", error);
      }
    }

    // using localhost for simplicity
    // if (editId) {
    //   const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    //   const updatedTodos = localStorageTodos.map((x) =>
    //     x.id === editId
    //       ? { ...x, title: formData.title, description: formData.description }
    //       : x
    //   );
    //   localStorage.setItem("todos", JSON.stringify(updatedTodos));
    // } else {
    //   const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    //   localStorageTodos.push({ ...formData, id: Date.now() });
    //   localStorage.setItem("todos", JSON.stringify(localStorageTodos));
    // }
    getAllTodos();
  };

  const getAllTodos = async () => {
    setIsLoad(true);
    try {
      const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(localStorageTodos);
      setIsLoad(false);
    } catch (error) {
      setIsLoad(false);
      console.error("Error:", error);
      toast.error("Error fetching todos!");
    }

    try {
      const res = await axios.get("/api");
      console.log(res.data.data);
      if (res.data.data) {
        setIsLoad(false);
        setTodos(res.data.data);
      }
    } catch (error) {
      setIsLoad(false);
      console.error("Error:", error);
      toast.error("Error fetching todos!");
    }
  };

  const onDelete = async (id) => {
    // const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // localStorageTodos.filter((x) => x.id !== id);
    // localStorage.setItem("todos", JSON.stringify(localStorageTodos));
    // setTodos(localStorageTodos);
    // getAllTodos();

    try {
      await axios.delete("/api", {
        params: {
          id: id,
        },
      });
      toast.success("Todo deleted successfully!");
      getAllTodos();
    } catch (error) {
      toast.error("Error deleting todo!");
      console.error("Error:", error);
    }
    getAllTodos();
  };
  const onUpdate = async (id) => {
    // Update todo in your database
    setEditId(id);
    // const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // let todo = localStorageTodos.find((x) => x.id === id);
    // console.log({ todo });

    let todo = todos.find((x) => x._id === id);
    setFormData({ title: todo.title, description: todo.description });
  };

  const onComplete = (id) => {
    // Update todo in your database
    const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = localStorageTodos.map((x) =>
      x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    getAllTodos();
  };
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleAdd}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] px-24 mt-20 m-auto"
      >
        <Inputbox onChange={handleChange} value={formData.title} />
        <Textarea onChange={handleChange} value={formData.description} />
        <Button
          extraClass={"bg-blue-400 hover:bg-blue-500"}
          text={editId ? "Update Todo" : "Add Todo"}
        />
      </form>
      {isLoad ? (
        <h1>Loading.....</h1>
      ) : (
        <Table
          data={todos}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onComplete={onComplete}
        />
      )}
    </>
  );
}
