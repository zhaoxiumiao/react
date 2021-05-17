import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props)
        //当组件的state或者props发生改变的时候，render函数就会重新执行
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    
    
    render(){
        // JSX -> js 对象 -> 真实的DOM
        return (
            <Fragment> 
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    {/* 下面是一个input框 */}
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    } 


    componentDidMount(){
        axios.get('https://www.fastmock.site/mock/cc5408a3fbab2db51b1dfa18f990f150/api/todolist').then(()=>{
            alert('succ')
        }).catch(()=>{
            alert('error')
        })
    }
    

    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return (
                <Fragment key={index}>
                    <TodoItem 
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                    {/*<li 
                        key={index} 
                        onClick={this.handleItemDelete.bind(this,index)}
                        dangerouslySetInnerHTML={{__html:item}}
                    >
                    </li>*/}
                </Fragment>
            )
        })
    }

    handleInputChange(e){
        const value = this.input.value
        this.setState(()=>({
            inputValue:value
        }))
        // this.setState({
        //     inputValue:e.target.value
        // })
    } 
    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            
        })
        
        // this.setState({
        //     list:[...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        // const lists = this.state.list
        // const inputValue = this.state.inputValue
        // lists.push(inputValue)
        // this.setState({
        //     list:lists
        // })
    }
    handleItemDelete(index){
        // immutable
        // state 不允许我们做任何的改变

        
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return{list}
        })
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list
        // })

        //不推荐这种写法
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // })

    }
}

export default TodoList