import React, { useEffect, useRef, useState } from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoItems from "./TodoItems";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState([
    {
      id: 12345,
      todo: "Keep learning",
      isCompleted: false,
    },
    {
      id: 12346,
      todo: "Stop worrying",
      isCompleted: true,
    },
  ]);

  const addTodo = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      todo: inputValue,
      isCompleted: false,
    };
    setTodoList((previousTodos) => [...previousTodos, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodoList((previousTodos) => {
      return previousTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* -------------title---------------- */}

        <div className="flex items-center mt-7 gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        {/* input todo */}

        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            ref={inputRef}
            className=" bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            placeholder="Add your task"
          />
          <button
            onClick={addTodo}
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          >
            ADD+
          </button>
        </div>

        {/* TODO items */}

        <div>
          {todoList.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.todo}
                id={item.id}
                isCompleted={item.isCompleted}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
