import React from 'react'
import { expect, mount, sinon } from '../testHelper'
import NewTodo from '../../src/components/NewTodo'

describe('NewTodo', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      addTodo: sinon.spy(),
    }
    wrapper = mount(<NewTodo {...props} />)
  })

  it('renders correct structure', () => {
    expect(wrapper).to.have.tagName('div')
    expect(wrapper).to.have.className('new-todo')
    expect(wrapper).to.have.descendants('input')
    expect(wrapper).to.have.descendants('button')
    expect(wrapper.find('button')).to.have.className('btn')
    expect(wrapper.find('button')).to.have.className('btn-primary')
    expect(wrapper.find('button')).to.have.text('Add')
  })

  it('changes state when typing', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Hello' } })
    expect(wrapper).to.have.state('text', 'Hello')
  })
})
