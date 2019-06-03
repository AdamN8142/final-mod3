import * as actions from './index.js'

describe('actions', () => {
  it('should return type "ADD_PRESIDENTS with presidents', () => {

    const presidents = [{h: 2}, {b: 3}]
    const expected = {
      type: "ADD_PRESIDENTS",
      presidents
    }
    const result = actions.addPresidents(presidents)
    expect(result).toEqual(expected)
  })
})