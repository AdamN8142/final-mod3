import { presidentsReducer } from '../Reducers/presidentsReducer'
import * as actions from '../Actions/index'

describe('presidentsReducer', () => {
  it('should return intial state', ()=> {
    const expected = []
    const result = presidentsReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should add presidents', () => {
    const expected = [{ok: 'maybe'}, {ok: 'nope'}]
    const result = actions.addPresidents(undefined, actions.addPresidents([{ok: 'maybe'}, {ok: 'nope'}]))
    expect(result).toEqual(expected)
  })
})