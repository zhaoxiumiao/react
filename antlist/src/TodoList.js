import 'antd/dist/antd.css';
import store from './store/index';
import {useState, useEffect} from 'react'
import {
    getInputChangeAction, 
    getAddItemAction,
    getDeleteItemAction,
    getInitList
    // initListAction
    // getTodoList
} from './store/actionCreators'
import TodoListUI from './TodoListUI'


//容器组件 关注业务逻辑

const handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
}

const handleStoreChange = (setobj) => {
    setobj(store.getState())
}

const handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
}

const handleDeleteItem = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
}



function TodoList (){
    const [obj, setobj] = useState(store.getState())
    useEffect(()=>{
        const action = getInitList()
        store.dispatch(action)
        
        // redux-thunk
        // const action = getTodoList()
        // store.dispatch(action) //action是个函数会自动执行
    },[])
    store.subscribe(()=>{handleStoreChange(setobj)}) //store中的数据发生变化就会执行handleStoreChange
    
    return (
        <TodoListUI 
            inputValue={obj.inputValue}
            list={obj.list}
            handleInputChange={handleInputChange}
            handleBtnClick={handleBtnClick}
            handleDeleteItem={handleDeleteItem}
        />
    )
}

export default TodoList