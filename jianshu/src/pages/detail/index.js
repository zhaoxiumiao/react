import {
    DetailWrapper,
    Header,
    Content
} from './style'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {actionCreators} from './store'

function Detail(props){
    const {title, content, getDetail} = props

    useEffect(()=>{
        
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
    getDetail(){

    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Detail)