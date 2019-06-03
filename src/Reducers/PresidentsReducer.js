export const presidentsReducer = (state = [], action ) => {
  switch(action.type) {
    case 'ADD_PRESIDENTS':
      return action.presidents;
    default:
      return state 
  }
}