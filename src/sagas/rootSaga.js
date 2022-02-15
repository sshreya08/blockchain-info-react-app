import { all } from 'redux-saga/effects';
import { latestBlocksSaga } from './blocks';
import { selectedBlockDetailsSaga } from './blockDetails';

export default function* rootSaga() {
	yield all([latestBlocksSaga, selectedBlockDetailsSaga]);
}
