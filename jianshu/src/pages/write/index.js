import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function Write(props){
    const {loginStatus} = props
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    if(loginStatus){
        return (
            <div>写文章页面</div>
        )
    }else{
        return <Redirect to="/login"/>
    }
    
    
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default React.memo(connect(mapStateToProps,null)(Write))