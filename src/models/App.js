import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To-do List</h1>
          <p>Click to-do to delete</p>
        </div>

        <div className="container">
          <div className="input-group">
            <input type="text" id="add-todo-input" className="form-control"
                   onKeyPress={(e) => this.handleAddTodoFromKeyPress(e)} />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button"
                      onClick={() => this.handleAddTodoFromClick()}>
                Add Todo
              </button>
            </span>
          </div>

          <TodoList todoItems={this.state.todoItems} handleClick={name => this.todoHandleClick(name)} />
        </div>
      </div>
    )
  }

  handleAddTodoFromKeyPress(e) {
    if (e.key !== "Enter") { return; }
    this.handleAddTodoFromClick();
  }

  handleAddTodoFromClick() {
    this.addTodo(document.getElementById("add-todo-input").value);
    document.getElementById("add-todo-input").value = "";
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

  todoHandleClick(name) {
    const newTodoItems = this.state.todoItems.filter(todoItem => { return todoItem.name !== name });
    this.setState({
      todoItems: newTodoItems,
    })
  }
}

export default App;
