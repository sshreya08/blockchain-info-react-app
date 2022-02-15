import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_LATEST_BLOCKS,
	GET_LATEST_BLOCKS_SUCCESS,
	GET_LATEST_BLOCKS_FAILURE,
} from '../actionTypes/blocks';

const API_URL = process.env.REACT_APP_API_URL;

export const getLatestBlocks = async () =>
	await axios.get('/api/blocks/1573858800000?format=json');

// To test as mock data when api not available
// export const getLatestBlocks = async () =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(resolve(blocks), 3000);
// 	});

export function* getLatestBlocksSaga() {
	try {
		const body = yield call(getLatestBlocks);
		yield put({
			type: GET_LATEST_BLOCKS_SUCCESS,
			payload: body['data'],
		});
	} catch (e) {
		yield put({
			type: GET_LATEST_BLOCKS_FAILURE,
			payload: e.message,
		});
	}
}

export const latestBlocksSaga = takeEvery(
	GET_LATEST_BLOCKS,
	getLatestBlocksSaga
);
