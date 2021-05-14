import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    //可以提高性能
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true
        }
        return false;
    }

    render() {
        console.log('child render');
        const {content} = this.props
        // JSX -> createElement -> js 对象 -> 真实的DOM
        
        // return <div><span>item</span></div>
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }


    handleClick(){
        const {deleteItem, index} = this.props
        deleteItem(index)
    }

}

TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,//isRequired是必填设置
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// TodoItem.defaultProps = {
//     test: 'hello world'
// }

export default TodoItem