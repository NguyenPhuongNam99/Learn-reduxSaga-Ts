import {all} from 'redux-saga/effects'

import counterSaga from '../features/counter/counterSaga'
function* helloSaga() {
    console.log('hello Saga');
    
}
export default function* rootSaga(){
    console.log('saga');
    yield all ([helloSaga(), counterSaga()])
    
}