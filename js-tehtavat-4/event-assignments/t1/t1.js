// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
for (const todo of todoList) {
  const list = document.getElementById('todoList');
  const container = document.createElement('li');
  list.appendChild(container);
  container.innerText = todo['id'];
  container.innerText = todo['task'];
  document.createElement('input');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  container.appendChild(checkbox);
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', function() {
    todo.completed = checkbox.checked;
    console.log(todo.completed);
  });
  container.id = todo['id'];
  console.log(container);
}


