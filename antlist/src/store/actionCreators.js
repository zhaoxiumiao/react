import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = (data) => ({
    type: GET_INIT_LIST
})


//redux-thunk进行异步请求
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('https://www.fastmock.site/mock/cc5408a3fbab2db51b1dfa18f990f150/api/todolist').then(res=>{
//             const data = res.data
//             const action = initListAction(data)
//             dispatch(action)
//         })
//     }
// }