import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';



const url = "http://localhost:3000/api/todo";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);

  }
  
    // Axios get
    loadTodoFromServer() {      
      axios.get(url+'/todos/')
        .then(res => {
          this.setState({data: res.data})
        })
    }

  componentDidMount() {
    this.loadTodoFromServer();
    // setInterval(this.loadTodoFromServer, 2000);
  }

  // Axios insert/post
  handleTodoSubmit(comment) {
    let comments = this.state.data
    let newComments = comments.concat([comment])
    this.setState({ data: newComments });
    axios.post(url+'/new/', comment)
      .catch(err => {
        console.error(err);
        // this.setState({ data: comments})
      });
  }


  render() {    
    // console.log(this.state)
    return(
      <div>
        <Header />

        <TodoForm onTodoSubmit={this.handleTodoSubmit}/>
        <TodoList data={this.state.data}/>

        <Footer />
      </div>
    )
  }
}

export default Home;