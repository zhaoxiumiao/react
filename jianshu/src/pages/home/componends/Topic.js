import React from 'react'
import {connect} from 'react-redux'
import { 
    TopicWrapper,
    TopicItem
} from '../style'


function Topic(props){
    const {list} = props
    return (
        <TopicWrapper>
            {
                list.map(item => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic' 
                                src={item.get('imgUrl')} 
                                alt=''
                            />
                            {item.get('title')}
                        </TopicItem>
                    )
                })
            }
            
        </TopicWrapper>
    )
}

const mapStateToProps = (state) =>({
    list: state.getIn(['home', 'topicList'])
})

export default React.memo(connect(mapStateToProps, null)(Topic))