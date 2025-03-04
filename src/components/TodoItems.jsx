import React from "react";
import {
  faCircle,
  faTrash,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItems = ({ text, isCompleted, id, deleteTodo, toggleTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggleTodo(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isCompleted ? (
          <FontAwesomeIcon
            className="w-7 text-green-500"
            icon={faCircleCheck}
          />
        ) : (
          <FontAwesomeIcon className="w-7 text-gray-300" icon={faCircle} />
        )}
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isCompleted ? " line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <FontAwesomeIcon
        onClick={() => {
          deleteTodo(id);
        }}
        icon={faTrash}
        className="w-7 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
