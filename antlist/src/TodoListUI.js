import {Input, List, Button} from 'antd';
// import 'antd/dist/antd.css';
//关注渲染--无状态组件

function TodoListUI (props) {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder="todo info" 
                    style={{width:'300px', marginRight: '10px'}}
                    onInput={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>{props.handleDeleteItem(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUI