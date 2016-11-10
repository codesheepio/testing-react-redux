import { expect } from '../testHelper'
import todosReducer from '../../src/reducers/todosReducer'
import { ADD_TODO } from '../../src/actions/types'

describe('todosReducer', () => {
  it('returns correct initial state', () => {
    expect(todosReducer(undefined, {})).to.deep.equal([])
  })

  it('returns current state if no action matched', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const nextState = todosReducer(curState, {})
    expect(nextState).to.equal(curState)
    expect(nextState).to.deep.equal(curState)
  })

  it('adds todos when receiving ADD_TODO action', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const action = {
      type: ADD_TODO,
      payload: {
        text: 'Sleep',
      },
    }
    const nextState = todosReducer(curState, action)
    const expectedState = [
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Sleep', complete: false },
    ]
    expect(nextState).to.deep.equal(expectedState)
    expect(nextState).to.not.equal(curState)
  })
})
