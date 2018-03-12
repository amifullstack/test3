const express = require('express');
const router = express.Router();

// Use model
const Todo = require('../../models/Todo');

router.get('/todos', (req, res, next) => {
  Todo.find((err, todo) => {
    if(err) {
      res.send(err.message);
    }
      res.send(todo)
  })
});

// Single Todo
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Todo.findById(id,(err, todo) => {
    if(err) {
      res.send(err.message);
    }
    res.send(todo);
  })
})

// Insert new Todo
router.post('/new', (req, res, next) => {
  const todo = req.body;
  let todoNew = new Todo(todo)  
  if(!todo.title) {
    res.status(400);
    res.json({ "error":"Bad Data"});
  } else {
    todoNew.save((err, todo) => {
      if(err) {
        res.send(err)
      } else {
        res.json(todo)
      }
    });
  }
})

// Update
router.put('/:id', (req, res, next) => {
  let todo = req.body;
  const id = req.params.id;  
  let updateTodo = {};  
  if (todo.title) {
    updateTodo.title = todo.title;   
  }
  if(!updateTodo) {
    res.status(400);
    res.json({ "error":"Bad data"});
  } else {
    Todo.findByIdAndUpdate(id, updateTodo,{new: true},  (err, todo) => {
      if(err) {
        res.send(err)
      } else {        
        res.json(todo)
      }
    });
  }
})


// Delete
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;  
  Todo.findByIdAndRemove(id, (err) => {
    if (err) {
      res.send(err)
    } else {
    res.json({ message: "Successfully deleted" });
    }
  });
});

module.exports = router;