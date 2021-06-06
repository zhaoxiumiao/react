import {useEffect} from 'react'
import Topic from './componends/Topic'
import List from './componends/List'
import Recommend from './componends/Recommend'
import Writer from './componends/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import React from 'react'
import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from './style'

const handleScrollTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    })
}

function Home(props){

    const bindEvents = ()=>{
        window.addEventListener('scroll', props.changeScrollTopShow)
    }

    useEffect(()=>{
        props.changeHomeDate()
        bindEvents()
        return () => {
            console.log('will unmount');
            window.removeEventListener('scroll', props.changeScrollTopShow)
        }
    },[])

    // const MyComponent = React.memo( //shouldComponentUpdate pureComponent
    //     _MyComponent, 
    //     (prevProps, nextProps) => nextProps.count !== prevProps.count
    // )    


    return (
        <HomeWrapper>
            <HomeLeft>
                <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                <Topic />
                <List />
            </HomeLeft>
            <HomeRight>
                <Recommend />
                <Writer />
            </HomeRight>
            {props.showScroll ? <BackTop onClick={handleScrollTop}>顶部</BackTop>: null}
            
        </HomeWrapper>
    )
}

const mapStateToProps = (state) =>({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) =>({
    changeHomeDate(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home))