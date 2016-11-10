import { expect } from '../testHelper'
import { ADD_TODO } from '../../src/actions/types'
import { addTodo } from '../../src/actions/todos'

describe('Todos actions', () => {
  it('creates ADD_TODO action when calling addTodo()', () => {
    const actual = addTodo('Sleep')
    const expected = {
      type: ADD_TODO,
      payload: {
        text: 'Sleep',
      },
    }
    expect(actual).to.deep.equal(expected)
  })
})
