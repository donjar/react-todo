import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To-do List</h1>
        </div>
        <TodoList />
      </div>
    );
  }
}

function TodoItem(props) {
  return (
    <li key={props.name}>{ props.name }</li>
  )
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <input type="text" id="add-todo-input" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"
                    onClick={() => this.addTodo(document.getElementById("add-todo-input").value)}>
              Add Todo
            </button>
          </span>
        </div>
        <ul className="TodoList">
          { this.state.todoItems.map(TodoItem) }
        </ul>
      </div>
    )
  }

  addTodo(name) {
    if (this.state.todoItems.some(todoItem => { return todoItem.name === name })) {
      alert("Cannot have same name");
      return;
    }

    this.setState({
      todoItems: this.state.todoItems.concat({ name: name }),
    });
  }
}

export default App;
