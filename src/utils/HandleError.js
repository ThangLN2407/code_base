import errors from '../constants/errors'

export const getError = err => {
  return err?.message === 'Network Error'
    ? errors.NETWORK_ERROR
    : err.response.data.error
}
export const compareErrResponse = (response, errorObj) =>
  response &&
  errorObj &&
  (response?.code ? response.code === errorObj?.code : true) &&
  (response?.message ? response?.message === errorObj?.message : true)
