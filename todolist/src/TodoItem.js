import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        console.log('child render');
        const {content, test} = this.props
        // JSX -> createElement -> js 对象 -> 真实的DOM
        
        // return <div><span>item</span></div>
        return (
            <div onClick={this.handleClick}>
               {test} - {content}
            </div>
        )
    }


    handleClick(){
        const {deleteItem, index} = this.props
        deleteItem(index)
    }

    // 当一个组件要从父组件接受参数
    // 如果这个组件第一次存在于父组件中, 不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps(){
        console.log('Child componentWillReceiveProps');
    }

    //当这个组件即将被页面中剔除的时候，执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,//isRequired是必填设置
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem