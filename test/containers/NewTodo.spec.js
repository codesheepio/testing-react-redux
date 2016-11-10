import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { expect, mount } from '../testHelper'
import NewTodoContainer from '../../src/containers/NewTodo'
import NewTodo from '../../src/components/NewTodo'
import { ADD_TODO } from '../../src/actions/types'


describe('NewTodo Container', () => {
  const createStore = configureMockStore()
  let wrapper
  let store

  beforeEach(() => {
    const state = { todos: [] }
    store = createStore(state)
    wrapper = mount(
      <Provider store={store}>
        <NewTodoContainer />
      </Provider>
    ).find(NewTodoContainer).find(NewTodo)
  })

  it('dispatches ADD_TODO action via props.addTodo', () => {
    expect(wrapper).to.have.prop('addTodo')
    expect(typeof wrapper.props().addTodo).to.equal('function')
    wrapper.props().addTodo('Hello')
    const actions = store.getActions()
    const expectedAction = {
      type: ADD_TODO,
      payload: {
        text: 'Hello',
      },
    }
    expect(actions).to.deep.equal([expectedAction])
  })
})
