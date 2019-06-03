import { mapDispatchToProps, addPresidents } from '../src/App'

describe('mapDispatchToProps', () => {
  it('should call dispatch with an arry of presidents', () => {
    const mockPresidents = [
      {name: 'Jerry'},
      {last: 'Garcia'}
    ]
    const mockDispatch = jest.fn()
    const actionDispatched = addPresidents(mockPresidents)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addPresidents(mockPresidents)
    expect(mockDispatch).toHaveBeenCalledWith(actionDispatched)
  })
})
//a