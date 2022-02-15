import {
	GET_LATEST_BLOCKS,
	GET_LATEST_BLOCKS_SUCCESS,
	GET_LATEST_BLOCKS_FAILURE,
} from '../actionTypes/blocks';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LATEST_BLOCKS:
			return { loading: true, error: null, data: [] };
		case GET_LATEST_BLOCKS_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case GET_LATEST_BLOCKS_FAILURE: {
			return { loading: false, error: action.payload, data: [] };
		}
		default:
			return state;
	}
};

export default reducer;
