import Topic from './componends/Topic'
import List from './componends/List'
import Recommend from './componends/Recommend'
import Writer from './componends/Writer'
import {
    HomeWrapper,
    HomeRight,
    HomeLeft
} from './style'

function Home(){
    return (
        <HomeWrapper>
            <HomeLeft>
                <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                <Topic />
                <List />
            </HomeLeft>
            <HomeRight>
                <Recommend />
                <Writer />
            </HomeRight>
        </HomeWrapper>
    )
}

export default Home