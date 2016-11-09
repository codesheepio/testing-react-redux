import React from 'react'
import { expect, shallow } from '../testHelper'
import TodoList from '../../src/components/TodoList'
import TodoItem from '../../src/components/TodoItem'

describe('TodoList', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    wrapper = shallow(<TodoList {...props} />)
  })

  it('render correct structure', () => {
    expect(wrapper).to.have.tagName('ul')
    expect(wrapper).to.have.className('todo-list')
  })

  it('render TodoItem from props', () => {
    expect(wrapper).to.have.exactly(2).descendants(TodoItem)
  })
})
