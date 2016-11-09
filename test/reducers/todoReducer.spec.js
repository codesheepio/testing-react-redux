import { expect } from '../testHelper'
import todosReducer from '../../src/reducers/todosReducer'

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
})
