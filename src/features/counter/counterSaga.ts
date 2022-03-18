import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";


export function* log(action: PayloadAction){
        console.log('actionm', action);

}
export default function* counterSaga(){
    console.log('counter saga');
    // yield takeEvery('counter/increment', log)
    //lang nghe cac 
    yield takeEvery('*', log)
}