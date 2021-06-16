import {
	
} from '../actions/authActions';

const initialState = {
	
};

function auth(state = initialState, action) {
	switch (action.type) {

		// case SELECT_COMPANY:
		// 	return Object.assign({}, state, {
		// 		companySelected: action.payload.companyData,
		// 	});

		default:
			return state;
	}
}

export default auth;
