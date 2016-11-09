import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = props => (
  <ul className="todo-list">
    {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

export default TodoList
