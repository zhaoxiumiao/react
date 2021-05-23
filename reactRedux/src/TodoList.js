//connect是连接器
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {
    getInputChangeAction,
    addItemAction,
    delItemAction,
    initListData
} from './store/actionCreators'

function TodoList (props) {
    const { initData,inputValue, handleClick, changeInputValue ,handleDelete ,list} = props
    useEffect(()=>{
        initData()
    },[])
    return (
        
        <div>
            <div>
                <input value={inputValue} onInput={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index} onClick={()=>{handleDelete(index)}}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeInputValue(e){
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action = addItemAction()
            dispatch(action)
        },
        handleDelete(index){
            const action = delItemAction(index)
            dispatch(action)
        },
        initData(){
            const action = initListData()
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 