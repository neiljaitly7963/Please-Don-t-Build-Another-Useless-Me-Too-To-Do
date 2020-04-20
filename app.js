//Seceltors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  //Prevent from submitting form
  event.preventDefault();
  //Creating Todo Div
  const todoDiv = document.createElement("div");
  //Adding class to todoDiv using classList.add
  todoDiv.classList.add("todo");
  //Creating Li(list items)
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //Sticking newTodo inside todoDiv
  todoDiv.appendChild(newTodo);
  //Check Mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Adding TODO Div under the List
  todoList.appendChild(todoDiv);
  //Clear Input Value after submit
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const tobeDeletedItem = item.parentElement;
    tobeDeletedItem.remove();
  }
}
