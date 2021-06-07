import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import  { actionCreators }  from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchIfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

const getListArea = (mouseIn, focused, list, page, handleMouseEnter, handleMouseLeave, totalPage, handleChangePage) =>{
    if(focused || mouseIn){
        const pageList = list.slice((page-1)*10, page*10)
        let spinIcon
        return(
            <SearchInfo 
                onMouseEnter={() => {handleMouseEnter()}}
                onMouseLeave={() => {handleMouseLeave()}}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchIfoSwitch
                        onClick={() => {handleChangePage(page, totalPage, spinIcon)}}
                    >
                        <span ref={(icon) => {spinIcon = icon}} className="iconfont spin">&#xe606;</span>
                        换一批
                    </SearchIfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        pageList.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                </SearchInfoList>
            </SearchInfo>
        )
    }else{
        return null;
    }
}

function Header (props) {

    const {focused,totalPage, handleInputFocus, handleInputBlur, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, login, logout} = props

    return (
        <HeaderWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <NavItem left active>首页</NavItem>
                <NavItem left>下载App</NavItem>
                {
                    login ? 
                        <NavItem onClick={logout} right>退出</NavItem> : 
                        <Link to="/login"><NavItem right>登录</NavItem></Link>
                }
                
                <NavItem right>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() =>{handleInputFocus(list)}}
                            onBlur={() => {handleInputBlur()}}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe662;</span>
                    {getListArea(mouseIn, focused, list, page, handleMouseEnter, handleMouseLeave, totalPage, handleChangePage)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Link to="/write">
                    <Button writting>
                        <span className="iconfont">&#xe708;</span>
                        写文章
                    </Button>
                </Link>
                <Button reg>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
        // state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0
            }
            spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout(){
           dispatch(loginActionCreators.logout()) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);