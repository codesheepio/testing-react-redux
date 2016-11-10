import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { expect, mount } from '../testHelper'
import TodoListContainer from '../../src/containers/TodoList'
import TodoList from '../../src/components/TodoList'


describe('TodoList Container', () => {
  const createStore = configureMockStore()
  let wrapper

  beforeEach(() => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const store = createStore(state)
    wrapper = mount(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    ).find(TodoListContainer).find(TodoList)
  })

  it('receive todos props from state', () => {
    expect(wrapper).to.have.prop('todos').deep.equal([
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Drink coffee', complete: true },
    ])
  })
})
