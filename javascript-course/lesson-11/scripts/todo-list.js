const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTask() {
  const inputElement = document.querySelector('.js-task-input');
  const task = inputElement.value;

  todoList.push(task);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}