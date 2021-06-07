import React from 'react'
import {Fragment} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

function List(props){
    const {list, getMoreList, page} = props
    return (
        <Fragment>
            {
                list.map((item, index) => (
                    <Link key={index} to={'/detail/' + item.get('id')}>
                        <ListItem>
                            <img className="pic" alt='' src={item.get('imgUrl')}/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))
            }
            <LoadMore onClick={()=>{getMoreList(page)}}>更多文字</LoadMore>
        </Fragment>
    )
}

const mapStateToProps = (state)=>({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) =>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default React.memo(connect(mapStateToProps,mapDispatchToProps)(List))