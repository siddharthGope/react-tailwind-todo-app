import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="bg-stone-900 grid justify-center items-center py-4 min-h-screen">
        <Todo />
      </div>
    </>
  );
}

export default App;
