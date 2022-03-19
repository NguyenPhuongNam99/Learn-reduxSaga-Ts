import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import {incrementSaga} from './counterSlice'

export function* log(action: PayloadAction){
        console.log('actionm', action);

    }

function* handleSaga(action: PayloadAction<number>){
    console.log('handle increment saga')
}
export default function* counterSaga(){
    console.log('counter saga');
    // yield takeEvery('counter/increment', log)
    //lang nghe cac 
    // yield takeEvery('*', log)
    console.log('incrementSaga', incrementSaga.toString())
    yield takeEvery(incrementSaga.toString(), handleSaga)
}