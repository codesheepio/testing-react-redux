import React, { Component, PropTypes } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.typeHandler = this.typeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  typeHandler(event) {
    this.setState({ text: event.target.value })
  }

  clickHandler() {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="new-todo">
        <input onChange={this.typeHandler} value={this.state.text} />
        <button onClick={this.clickHandler} className="btn btn-primary">Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTodo
