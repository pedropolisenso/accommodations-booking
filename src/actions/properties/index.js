import HTTP from '../../../configs/HTTP';
import {
  GET_PROPERTIES_SUCCESS,
  CREATE_PROPERTIES_SUCCESS,
  DELETE_PROPERTIES_SUCCESS,
  PROPERTIES_ERROR
} from '../types';

// GET
export const getProperties = () => (dispatch) => {
  HTTP.get('/properties')
    .then(({ data }) => dispatch(getPropertiesSuccess(data)))
    .catch((error) => dispatch(propertiesError(error)));
};

// POST
export const createProperties = (body) => (dispatch) => {
  HTTP.post('/properties', body)
    .then(({ data }) => dispatch(createPropertiesSuccess(data)))
    .catch((error) => dispatch(propertiesError(error)));
};

// DELETE
export const deleteProperties = (id) => (dispatch) => {
  HTTP.delete(`/properties/${id}`,)
    .then(() => dispatch(deletePropertiesSuccess(id)))
    .catch((error) => dispatch(propertiesError(error)));
};

// ACTION ERROR DEFAULT
const getPropertiesSuccess = ({ properties }) => ({
  type: GET_PROPERTIES_SUCCESS,
  payload: properties
});

const createPropertiesSuccess = (data) => ({
  type: CREATE_PROPERTIES_SUCCESS,
  payload: {
    data,
    successCreated: true
  }
});

const deletePropertiesSuccess = (id) => ({
  type: DELETE_PROPERTIES_SUCCESS,
  payload: {
    id,
    successDeleted: true
  }
});


const propertiesError = (errorServer) => ({
  type: PROPERTIES_ERROR,
  payload: errorServe
});
