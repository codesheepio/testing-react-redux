import React, { PropTypes } from 'react'

const TodoInput = props => (
  <li className={props.complete ? 'complete' : ''}>{props.text} :)</li>
)

TodoInput.propTypes = {
  complete: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

export default TodoInput
