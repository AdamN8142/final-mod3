import { mapStateToProps } from '../PresidentContainer/PresidentContainer'

describe('mapStateToProps', () => {
  it('should return an array of presidents', ()=> {
    const mockState = {
     presidents: [
      {hey: 'hi'},
      {bye: 'by'}
    ],
    hi: 'he'
  }
    const expected = {
      presidents: [
      {hey: 'hi'},
      {bye: 'by'}
    ]}
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

