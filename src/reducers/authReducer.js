import constants from '../constants'
import jwt_decode from 'jwt-decode'

const id_token = localStorage.getItem('id_token')
const initialUser = id_token ? jwt_decode(id_token) : null

const initialState = {
	pending: false,
	user: initialUser,
	error: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.LOGIN_REQUEST:
		case constants.REGISTER_REQUEST:
			return {
				pending: true,
				user: null,
				error: null,
			}
		case constants.LOGIN_SUCCESS:
		case constants.REGISTER_SUCCESS:
			return {
				...state,
				pending: false,
				user: action.payload,
			}
		case constants.LOGIN_FAILURE:
		case constants.REGISTER_FAILURE:
			return {
				...state,
				pending: false,
				error: action.error,
			}
		case constants.LOGOUT_SUCCESS:
			return {
				pending: false,
				user: null,
				error: null,
			}
		default:
			return state
	}
}