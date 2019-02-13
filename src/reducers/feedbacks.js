import {
  CREATE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_SUCCESS,
} from '../actions/types';

const Feedbacks = (state = {}, action) => {
  switch(action.type) {
    case CREATE_PROPERTIES_SUCCESS:
      if (state.successDeleted) delete state.successDeleted;
      return Object.assign({}, state, {successCreated: action.payload.successCreated})
    case DELETE_PROPERTIES_SUCCESS:
      if (state.successCreated) delete state.successCreated;
      return Object.assign({}, state, {successDeleted: action.payload.successDeleted})
    default:
      return state;
  }
}

export default Feedbacks;
