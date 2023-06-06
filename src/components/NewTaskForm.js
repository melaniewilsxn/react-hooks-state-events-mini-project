import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const categoryOptions = categories.map((category) => {
    return category !== "All" ? <option key={category}>{category}</option> : null
  })

  const [text, setNewText] = useState("")
  const [category, setNewCategory] = useState("Code")

  function handleNewTask(event){
    setNewText(event.target.value)
  }

  function handleNewCategory(event){
    setNewCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({ text, category })
    setNewText("")
    setNewCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
