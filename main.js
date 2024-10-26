const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

//Adding task to array before storinf=g it on local storage

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

function saveTask() {
  localStorage.setItem("task", JSON.stringify(tasks));
}
