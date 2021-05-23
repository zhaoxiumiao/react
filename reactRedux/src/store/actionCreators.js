import {
    CHANGE_INPUT_VALUE,
    ADD_ITEM,
    DEL_ITEM,
    INIT_LIST
} from './actionTypes'
import axios from 'axios'


export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const addItemAction = () =>({
    type:ADD_ITEM
})

export const delItemAction = (index) =>({
    type:DEL_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})

export const initListData = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/cc5408a3fbab2db51b1dfa18f990f150/api/todolist').then(res=>{
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}