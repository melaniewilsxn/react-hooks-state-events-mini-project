import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function onDeleteTask(deletedText){
    setTasks(tasks.filter((task) => task.text !== deletedText))
  }

  function addNewTask(newTask){
    const taskData = {text: newTask.text, category: newTask.category}
    const taskArray = [...tasks, taskData]
    setTasks(taskArray)
  }

  const taskList = tasks.filter((task) =>
    category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={taskList} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
