import { takeEvery,put } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios'

function* getInitList() {
    //yield这时就像async await
    try{
        const res = yield axios.get('https://www.fastmock.site/mock/cc5408a3fbab2db51b1dfa18f990f150/api/todolist')
        const action = initListAction(res.data)
        yield put(action)
    }catch(e){
        console.log('list.json网路请求失败');
    }
    
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga