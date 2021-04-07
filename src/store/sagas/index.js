import { put, takeLatest, all, call } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED } from "../../constants/action-types";

function* fetchNews() {
    const resp = yield call(fetch,'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc');
    const response = yield resp.json();
    console.log(response.articles);
    yield put({ type: NEWS_RECEIVED, json: response.articles});
}


function* actionWatcher() {
    yield takeLatest(GET_NEWS, fetchNews)
}


export default function* rootSaga() {
    yield all([ actionWatcher()]);
}