import React, { Component } from 'react';

// CSS

class TodoFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',      
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    let description = this.refs.description.value; 
    
    if(!title || !description) {
      return;
    } else {
      this.props.onTodoSubmit({ title: title, description: description, status:"active" });
      this.setState({ title:'', description:'' });
    }
    
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <h1>Add new Todo</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" ref="title" className="title" placeholder="Title"></input>
          </div>
          <div clasName="form-group">
            <label>Description</label>
            <input type="text" ref="description" className="description" placeholder="Description"></input>
          </div>
          {/* <div className="form-group">

          </div> */}
          <button type="submit">Add</button>
          <button type="cancel">Cancel</button>

        </form>
      </div>
    )
  }
}

export default TodoFrom;