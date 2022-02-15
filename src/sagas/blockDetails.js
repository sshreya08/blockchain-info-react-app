import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_SELECTED_BLOCK_DETAILS,
	GET_SELECTED_BLOCK_DETAILS_SUCCESS,
	GET_SELECTED_BLOCK_DETAILS_FAILURE,
} from '../actionTypes/blocks';

// const API_URL = process.env.REACT_APP_API_URL;

export const getSelectedBlockDetails = async (hash) =>
	await axios.get(
		'/detail/rawblock/00000000000000000005bf9ddb82a3103a0f8a450e1e16bc39c0d178c64fcd4b'
	);

export function* getSelectedBlockDetailsSaga({ payload }) {
	try {
		const body = yield call(getSelectedBlockDetails(payload));
		yield put({
			type: GET_SELECTED_BLOCK_DETAILS_SUCCESS,
			payload: body['data'],
		});
	} catch (e) {
		yield put({
			type: GET_SELECTED_BLOCK_DETAILS_FAILURE,
			payload: e.message,
		});
	}
}

export const selectedBlockDetailsSaga = takeEvery(
	GET_SELECTED_BLOCK_DETAILS,
	getSelectedBlockDetailsSaga
);
