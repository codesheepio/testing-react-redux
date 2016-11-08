import React from 'react'
import { expect, shallow } from '../testHelper'
import TodoItem from '../../src/components/TodoItem'

describe('TodoItem', () => {
  it('should render correct structure', () => {
    const wrapper = shallow(<TodoItem text="Hello" />)
    expect(wrapper).to.have.tagName('li')
    expect(wrapper).to.have.className('todo-item')
  })

  it('should show text prop', () => {
    let wrapper = shallow(<TodoItem text="Hello" />)
    expect(wrapper).to.have.text('Hello')
    wrapper = shallow(<TodoItem text="World" />)
    expect(wrapper).to.have.text('World')
  })
})
