import React, { PropTypes } from 'react'
import classNames from 'classnames'

const TodoInput = props => (
  <li
    className={classNames(
      'todo-item',
      {
        complete: props.complete,
      }
    )}
  >
    {props.text} :)
  </li>
)

TodoInput.propTypes = {
  complete: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

export default TodoInput
