import {
    DetailWrapper,
    Header,
    Content
} from './style'
import {connect} from 'react-redux'
import React,{useEffect} from 'react'
import {actionCreators} from './store'
import {useParams} from 'react-router-dom'

function Detail(props){
    const {title, content, getDetail} = props
    const id = useParams().id
    useEffect(()=>{
        getDetail(id);
    },[])
    return (
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html: content}} />
        </DetailWrapper>
    )
    
}

const mapStateToProps = (state)=>({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) =>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default React.memo(connect(mapStateToProps,mapDispatchToProps)(Detail))