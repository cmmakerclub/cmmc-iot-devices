import actionTypes from './Constants'

const initialState = {}

export default (state = initialState, action) => {

  if (action.type === actionTypes.DONE_GET_DATA) {
    console.log('===== incoming', action.data)
  }

}