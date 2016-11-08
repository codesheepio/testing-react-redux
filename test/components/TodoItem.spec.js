import React from 'react'
import { expect, shallow } from '../testHelper'
import TodoItem from '../../src/components/TodoItem'

describe('TodoItem', () => {
  let wrapper

  it('should render correct structure', () => {
    wrapper = shallow(<TodoItem text="Hello" />)
    expect(wrapper).to.have.tagName('li')
  })
})
