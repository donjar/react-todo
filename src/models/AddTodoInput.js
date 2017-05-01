import React from 'react';

class AddTodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" id="add-todo-input" className="form-control"
               value={this.state.inputValue}
               onChange={(e) => this.handleInputChange(e)}
               onKeyPress={(e) => this.handleAddTodoFromKeyPress(e)} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button"
                  onClick={() => this.handleAddTodoFromClick()}>
            Add Todo
          </button>
        </span>
      </div>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleAddTodoFromKeyPress(e) {
    if (e.key !== "Enter") { return; }
    this.handleAddTodoFromClick();
  }

  handleAddTodoFromClick() {
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  }
}

export default AddTodoInput;
