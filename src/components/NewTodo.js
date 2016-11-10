import React, { Component, PropTypes } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.typeHandler = this.typeHandler.bind(this)
  }
  typeHandler(event) {
    this.setState({ text: event.target.value })
  }
  render() {
    return (
      <div className="new-todo">
        <input onChange={this.typeHandler} value={this.state.text} />
        <button className="btn btn-primary">Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTodo
