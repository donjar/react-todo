import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './TodoList';
import AddTodoInput from './AddTodoInput';

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
          <AddTodoInput addTodo={name => this.addTodo(name)} />
          <TodoList todoItems={this.state.todoItems}
                    handleClick={name => this.itemHandleClick(name)} />
        </div>
      </div>
    )
  }

  addTodo(name) {
    const sameName = todoItem => { return todoItem.name === name };
    if (this.state.todoItems.some(sameName)) {
      alert("Cannot have same name");
      return;
    }

    this.setState({
      todoItems: this.state.todoItems.concat({ name: name }),
    });
  }

  itemHandleClick(name) {
    const newTodoItems = this.state.todoItems.filter(todoItem =>
      { return todoItem.name !== name }
    );
    this.setState({
      todoItems: newTodoItems,
    })
  }
}

export default App;
