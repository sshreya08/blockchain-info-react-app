import {
	GET_LATEST_BLOCKS,
	GET_LATEST_BLOCKS_SUCCESS,
	GET_LATEST_BLOCKS_FAILURE,
	GET_SELECTED_BLOCK_DETAILS,
	GET_SELECTED_BLOCK_DETAILS_SUCCESS,
	GET_SELECTED_BLOCK_DETAILS_FAILURE,
} from '../actionTypes/blocks';

export const getLatestBlocks = () => ({
	type: GET_LATEST_BLOCKS,
});

export const getLatestBlocksSuccess = (payload) => ({
	type: GET_LATEST_BLOCKS_SUCCESS,
	payload,
});

export const getLatestBlocksFailure = (payload) => ({
	type: GET_LATEST_BLOCKS_FAILURE,
	payload,
});

export const getSelectedBlockDetails = (payload) => ({
	type: GET_SELECTED_BLOCK_DETAILS,
	payload,
});

export const getSelectedBlockDetailsSuccess = (payload) => ({
	type: GET_SELECTED_BLOCK_DETAILS_SUCCESS,
	payload,
});

export const getSelectedBlockDetailsFailure = (payload) => ({
	type: GET_SELECTED_BLOCK_DETAILS_FAILURE,
	payload,
});
