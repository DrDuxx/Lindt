import {
	
} from '../config';

export const RESET = 'RESET';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


const actions = {
	// signUp: (data) => async (dispatch) => {
	// 	try {
	// 		dispatch({
	// 			type: REGISTER_REQUEST,
	// 		});
	// 		await signUp(data).then((response) => {
	// 			console.log(response)
	// 			if (response.status === 200) {
	// 				dispatch({
	// 					type: REGISTER_SUCCESS,
	// 					payload:{
	// 						message: response.data.data.message
	// 					}
	// 				});
	// 			} else {
	// 				dispatch({
	// 					type: REGISTER_ERROR,
	// 					payload: {
	// 						message: response.data.message,
	// 					},
	// 				});
	// 			}
	// 		});
	// 	} catch (error) {
	// 		dispatch({
	// 			type: REGISTER_ERROR,
	// 			payload: {
	// 				message: 'Error registering user',
	// 			},
	// 		});
	// 	}
	// },
};

export default actions;
