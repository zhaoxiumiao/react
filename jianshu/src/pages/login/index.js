import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'

function Login(props){
    const {loginStatus} = props
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    if(!loginStatus){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" ref={(input) => {setAccount(input)}}/>
                    <Input placeholder="密码" type="password" ref={(input) => {setPassword(input)}}/>
                    <Button onClick={() =>{props.login(account, password)}}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }else{
        return <Redirect to="/"/>
    }
    
    
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) =>({
    login(accountElem, passwordElem){
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})

export default React.memo(connect(mapStateToProps,mapDispatchToProps)(Login))