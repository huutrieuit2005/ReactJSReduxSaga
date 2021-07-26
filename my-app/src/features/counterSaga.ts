import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { increment } from "./counter/counterSlice";


export function* log(action: PayloadAction){
    console.log('log', action);
    
}
export default function* counterSaga() {
    console.log("counterSaga");

    yield takeEvery(increment.type, log);
}
