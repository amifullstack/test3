import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }



onDone(id) { 
  this.setState({ data: id})
  
}
render () {
  const propsData = this.props.data;  

  // console.log(propsData)
  console.log(this.state.data)

  const returnData = propsData.map(e => {

    // login 
    
    <div key={e._id}>
         <li>Title: {e.title}</li>
          <li>Description: {e.description}</li>          
          <button onClick={() => this.onDone(e._id)}>Done</button>
      </div>

  })
  return(
    <div>     
      <ul>
        {returnData}        
      </ul>
    </div>
  )
}
}

export default TodoList;