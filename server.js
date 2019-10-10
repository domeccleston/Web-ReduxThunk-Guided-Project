const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

const fruits = [
  { id: uuid(), name: 'pear' },
  { id: uuid(), name: 'mango' },
  { id: uuid(), name: 'banana' },
];
const meats = [
  { id: uuid(), name: 'beef' },
  { id: uuid(), name: 'chicken' },
  { id: uuid(), name: 'fish' },
];
let todoList = [
  { id: uuid(), name: "sweeping", completed: false },
  { id: uuid(), name: "mopping", completed: false },
  { id: uuid(), name: "washing dishes", completed: false },
];

app.get('/market/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/market/meats', (req, res) => {
  res.json(meats);
});

app.put('/todos/:id', (req, res) => {
  todoList = todoList.map(todo => {
    if (todo.id !== req.params.id) return todo;
    return {
      ...todo,
      completed: !todo.completed,
    };
  });
  res.json(todoList);
});

app.get('/todos', (req, res) => {
  res.json(todoList);
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'no such endpoint' });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
