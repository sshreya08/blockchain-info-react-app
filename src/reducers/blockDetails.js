import {
	GET_SELECTED_BLOCK_DETAILS,
	GET_SELECTED_BLOCK_DETAILS_SUCCESS,
	GET_SELECTED_BLOCK_DETAILS_FAILURE,
} from '../actionTypes/blocks';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SELECTED_BLOCK_DETAILS:
			return { loading: true, error: null, data: [] };
		case GET_SELECTED_BLOCK_DETAILS_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case GET_SELECTED_BLOCK_DETAILS_FAILURE: {
			return { loading: false, error: action.payload, data: [] };
		}
		default:
			return state;
	}
};

export default reducer;
