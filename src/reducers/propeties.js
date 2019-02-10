import {
  GET_PROPETIES_SUCCESS,
  CREATE_PROPETIES_SUCCESS,
  DELETE_PROPETIES_SUCCESS,
  PROPETIES_ERROR
} from '../actions/types';

const Propeties = (state = {}, action) => {
  switch(action.type) {
    case GET_PROPETIES_SUCCESS:
      if (state && state.errorServer) delete state.errorServer;
      return Object.assign({}, state, action.payload)
    case CREATE_PROPETIES_SUCCESS:
    case DELETE_PROPETIES_SUCCESS:
    case PROPETIES_ERROR:
    default:
      return state;
  }
}

export default Propeties;
