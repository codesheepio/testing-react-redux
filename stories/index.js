import React from 'react'
import { storiesOf } from '@kadira/storybook' // eslint-disable-line
import TodoItem from '../src/components/TodoItem'
import TodoList from '../src/components/TodoList'
import '../src/style.css'

storiesOf('TodoItem', module)
  .add('Complete', () => (
    <TodoItem text="Complete" complete />
  ))
  .add('Not Complete', () => (
    <TodoItem text="Not Complete" />
  ))

storiesOf('TodoList', module)
  .add('with todos', () => {
    const todos = [
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Drink', complete: true },
    ]
    return <TodoList todos={todos} />
  })
