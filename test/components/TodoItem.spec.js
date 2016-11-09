import React from 'react'
import { expect, shallow } from '../testHelper'
import TodoItem from '../../src/components/TodoItem'

describe('TodoItem', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = { text: 'Hello', complete: false }
    wrapper = shallow(<TodoItem {...props} />)
  })

  it('should render correct structure', () => {
    expect(wrapper).to.have.tagName('li')
    expect(wrapper).to.have.className('todo-item')
  })

  it('should show text prop', () => {
    expect(wrapper).to.have.text('Hello')

    props.text = 'World'
    wrapper.setProps(props)
    expect(wrapper).to.have.text('World')
  })

  it('should render complete class', () => {
    props.complete = true
    wrapper.setProps(props)
    expect(wrapper).to.have.className('complete')
  })
})
