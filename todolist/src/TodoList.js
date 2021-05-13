import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
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

    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log('componentWillMount');
    }

    render(){
        console.log('parent render');
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
    
    //组件被挂载到页面后执行
    componentDidMount(){
        console.log('componentDidMount');
    }

    //组件被更新之前，他会自动被执行 返回一个boolean值true 和 false 决定是否要被更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }

    // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后执行
    // 如果shouldComponentUpdate返回true它才执行
    // 如果返回false, 这个函数就不会被执行了
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    //组件更新完成之后，它会自动执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
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
            console.log(this.ul.querySelectorAll('div').length);
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