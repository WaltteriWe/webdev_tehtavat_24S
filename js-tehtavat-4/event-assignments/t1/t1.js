const todoList = [
  {
    id: 1,
    task: 'Learn JavaScript',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn CSS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn Node.js',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const list = document.querySelector('ul');

function addTaskToList(todo) {
  const container = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.id = `todo-${todo.id}`;
  checkbox.addEventListener('click', function () {
    todo.completed = !todo.completed;
    console.log(todoList);
  });
  console.log(container);
  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;
  const button = document.createElement('button');
  button.innerText = 'Remove task';
  button.addEventListener('click', deleteTask);
  function deleteTask() {
    list.removeChild(container);
    const index = todoList.findIndex(item => item.id === todo.id);
    if (index !== -1) {
      todoList.splice(index, 1);
    }
    console.log(todoList);
  }

  container.append(checkbox, label, button);
  list.appendChild(container);
}

for (const todo of todoList) {
  addTaskToList(todo);
}

const addTask = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');
const addBtn = document.querySelector('dialog > form > button');
const inputField = document.querySelector('dialog > form > input');

addTask.addEventListener('click', () => {
  modal.showModal();
});

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const newItem = {
    id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1, 
    task: inputField.value,
    completed: false,
  };
  console.log(inputField.value);
  todoList.push(newItem);
  addTaskToList(newItem);
  modal.close();
  console.log(todoList);
});