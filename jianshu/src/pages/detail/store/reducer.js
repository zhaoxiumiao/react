import { fromJS } from 'immutable'
import * as constants from './constants'
import detailImg from '../../../statics/detail.webp'
const defaultState = fromJS({
    title: '社会上有哪些潜规则让你细思恐极？',
    content: `<img src=${detailImg}/><p><b>社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。</b></p><p>社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。</p><p>社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。</p><p>社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。</p>`
})


export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}