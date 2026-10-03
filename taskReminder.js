document.addEventListener("DOMContentLoaded", function () {
  //Select DOM elements
  const addButton = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const list = document.createElement("li");

    // A button to edit a task.
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    list.appendChild(textSpan);

    // the edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = `<span class="material-symbols-outlined"> edit </span>`;
    editButton.classList.add("edit-btn");
    //set onclick event to edit the text
    editButton.onclick = function () {
      const updatedText = prompt("Edit your task:", textSpan.textContent);
      if (updatedText !== null && updatedText.trim() !== "") {
        textSpan.textContent = updatedText.trim();
      } else {
        updatedText;
      }
    };

    // created a remove button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    removeButton.classList.add("remove-btn");

    //set onclick event to remove the task
    removeButton.onclick = function () {
      confirm("Are you sure you want to delete this task?");
      taskList.removeChild(list);
    };

    //append remove button to the list item
    list.appendChild(editButton);
    list.appendChild(removeButton);
    taskList.appendChild(list);

    //clear the input field
    taskInput.value = "";
  }
  localStorage.setItem("taskText", "taskInput");
  // Attach click event to Add Task button
  addButton.addEventListener("click", addTask);

  // Attach keypress event to input field to allow adding task with Enter key
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  //a function to delete task
  deleteBtn.addEventListener("click", function () {
    const deleteTask = document.getElementById("taskList");
    deleteTask.removeChild(deleteTask.lastElementChild);
  });

  //A collection of paragraph elements to use under H1
  const para = [
    "A reminder is your daily friend!",
    "Stay organised, get things done.",
    "Keep it here, we'll remind you!",
    "Write and wait, get notified",
    "I keep it while you sleep!",
    "What are we up to today?",
  ];

  let getRandomPara = Math.floor(Math.random() * para.length);
  console.log(para[getRandomPara]);
  document.getElementById("firstPara").textContent = para[getRandomPara];
});
