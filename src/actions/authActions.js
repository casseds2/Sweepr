import { push } from 'react-router-redux'
import jwt_decode from 'jwt-decode'
import constants from '../constants'
import { APIManager } from '../utils'

const registerRequest = () => ({
  type: constants.REGISTER_REQUEST,
})

const registerSuccess = (payload) => ({
  type: constants.REGISTER_SUCCESS,
  payload,
})

const registerError = (error) => ({
  type: constants.REGISTER_FAILURE,
  error,
})

const loginRequest = () => ({
  type: constants.LOGIN_REQUEST,
})

const loginSuccess = (payload) => ({
  type: constants.LOGIN_SUCCESS,
  payload,
})

const loginFailure = (error) => ({
  type: constants.LOGIN_FAILURE,
  error,
})

const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS,
})

export function register(userCredentials) {
  return (dispatch) => {
    APIManager.post('/auth/users', userCredentials)
      .then(response => {
        const { id_token, access_token } = response
        const userData = jwt_decode(id_token)
        localStorage.setItem('id_token', id_token)
        localStorage.setItem('access_token', access_token)
        dispatch(registerSuccess(userData))
        push('/')
      })
      .catch(error => dispatch(registerError(error)))
  }
}

export function login(username, password) {    
  return (dispatch) => {
    dispatch(loginRequest())   
    APIManager.post('/auth/sessions/create', {
      username: username,
      password: password,
    })
    .then(response => {
      const { id_token, access_token } = response
      const userData = jwt_decode(id_token)
      localStorage.setItem('id_token', id_token)
      localStorage.setItem('access_token', access_token)
      dispatch(loginSuccess(userData))
      push('/')
    })
    .catch(error => dispatch(loginFailure(error)))
  }
}

export function logout(username) {
  return (dispatch) => {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    dispatch(logoutSuccess())
  }
}