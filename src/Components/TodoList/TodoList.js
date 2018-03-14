import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
            id: '123'
        },
        {
          id: '234'

        }
      ]
    }
    }
  
onClickStrike(e) {
  
  let newObj = { id:e, active: false }
  
  this.setState({ data: [...this.state.data, newObj] })  
}
  render() {
    const data = this.props.data;  
    console.log(data)  
    let arrayData = this.state.data;
    // for(const a of arrayData) {
    //   console.log(a.id)
    // }
    // console.log(arrayData.id)
    

    let todoNodes = this.props.data.map(todo => {      
      return (
        <div key={todo._id} className="list-group">

          { todo._id === arrayData.id  ?
            <div key={todo._id} className="list-group">
            <strike>
            <h4>{todo.title}</h4><br/>
            <p>{todo.description}</p>
            </strike>            
            </div>
            : 
            <div key={todo._id} className="list-group">              
              <h4>{todo.title}</h4><br/>
              <p>{todo.description}</p>
          </div>}
          <button onClick={() => this.onClickStrike(todo._id)}>X</button>
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