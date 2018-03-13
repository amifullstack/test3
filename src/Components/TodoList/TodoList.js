import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let todoNodes = this.props.data.map(todo => {
      
      return (
        <div key={todo._id}>
          Title: {todo.title}
        </div>
      )
    })
    return(
      <div>
        <h1>All Todos</h1>
        {todoNodes}
      </div>
    )
  }
}

export default TodoList;