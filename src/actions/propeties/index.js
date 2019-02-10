import HTTP from '../../../configs/HTTP';
import {
  GET_PROPETIES_SUCCESS,
  CREATE_PROPETIES_SUCCESS,
  DELETE_PROPETIES_SUCCESS,
  PROPETIES_ERROR
} from '../types';

// GET
export const getPropeties = () => (dispatch) => {
  HTTP.get('/properties')
    .then(({ data }) => dispatch(getPropetiesSuccess(data)))
    .catch((error) => dispatch(propetiesError(error)));
};

// POST
export const createPropeties = (body) => (dispatch) => {
  HTTP.post('/properties', body)
    .then(() => dispatch(createPropetiesSuccess()))
    .catch((error) => dispatch(propetiesError(error)));
};

// DELETE
export const deletePropeties = (id) => (dispatch) => {
  HTTP.delete(`/properties/${id}`,)
    .then(() => dispatch(deletePropetiesSuccess()))
    .catch((error) => dispatch(propetiesError(error)));
};

// ACTION ERROR DEFAULT
const getPropetiesSuccess = ({ properties }) => ({
  type: GET_PROPETIES_SUCCESS,
  payload: {
    properties
  }
});

const createPropetiesSuccess = () => ({
  type: CREATE_PROPETIES_SUCCESS,
});

const deletePropetiesSuccess = () => ({
  type: DELETE_PROPETIES_SUCCESS,
});


const propetiesError = (errorServer) => ({
  type: PROPETIES_ERROR,
  payload: {
    errorServer
  }
});
