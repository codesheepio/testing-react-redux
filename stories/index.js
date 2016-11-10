import React from 'react'
import { storiesOf } from '@kadira/storybook' // eslint-disable-line import/no-extraneous-dependencies
import TodoItem from '../src/components/TodoItem'
import TodoList from '../src/components/TodoList'
import NewTodo from '../src/components/NewTodo'
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

storiesOf('NewTodo', module)
  .add('', () => (
    <NewTodo addTodo={() => {}} />
  ))
