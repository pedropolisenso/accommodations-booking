import {
  GET_PROPERTIES_SUCCESS,
  CREATE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_SUCCESS,
  PROPERTIES_ERROR
} from '../actions/types';

const Properties = (state = {}, action) => {
  switch(action.type) {
    case GET_PROPERTIES_SUCCESS:
      if (state && state.errorServer) delete state.errorServer;
      return Object.assign({}, state, action.payload)
    case CREATE_PROPERTIES_SUCCESS:
    case DELETE_PROPERTIES_SUCCESS:
    case PROPERTIES_ERROR:
    default:
      return state;
  }
}

export default Properties;
