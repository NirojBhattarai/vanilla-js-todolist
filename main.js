document.addEventListener("DOMContentLoaded", () => {
  // Rendering all elements only after DOM Content Loaded

  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach((task) => renderTask(task));

  //Adding task to array before storing it on local storage

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
      return;
    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };

      tasks.push(newTask);
      saveTask();
      todoInput.value = "";
      console.log(tasks);
    }
  });

  // Function to Render tasks within list
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>`;
    todoList.appendChild(li);
  }

  // Function to Save task in local storage
  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
