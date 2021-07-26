import counterSaga from 'features/counterSaga';
import { all } from 'redux-saga/effects';

function* heloSaga() {
  console.log('hello saga');
}

export default function* rootSaga() {
  console.log('rootSaga log');
  yield all([heloSaga(), counterSaga()]);
}
