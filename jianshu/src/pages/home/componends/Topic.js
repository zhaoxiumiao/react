import { 
    TopicWrapper,
    TopicItem
} from '../style'

function Topic(){
    return (
        <TopicWrapper>
            <TopicItem>
                <img
                    className='topic-pic' 
                    src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" 
                />
                社会热点
            </TopicItem>
        </TopicWrapper>
    )
}

export default Topic