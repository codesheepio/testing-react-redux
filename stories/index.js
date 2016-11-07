import React from 'react'
import { storiesOf } from '@kadira/storybook' // eslint-disable-line
import TodoItem from '../src/components/TodoItem'
import '../src/style.css'

storiesOf('TodoItem', module)
  .add('Complete', () => (
    <TodoItem text="Complete" complete />
  ))
  .add('Not Complete', () => (
    <TodoItem text="Not Complete" />
  ))
