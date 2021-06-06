import styled from 'styled-components'
import Recommend from '../../statics/Recommend.png'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${Recommend});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 278px;
    display: flex;
    flex-direction: column;
    
`

export const WriterTop = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
    span{
        font-size:14px;
    }
    .iconfont{
        margin-right: 5px;
    }
`

export const WriterBot = styled.div`
    display: flex;
    height: 325px;
    flex-direction: column;
    justify-content: space-between;
`

export const WriterBotItem = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    height: 48px;
    position: relative;
    .avatar{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .attention{
        position:absolute;
        right:0;
        top:0;
        font-size: 13px;
        color: #42c02e;
    }
`

export const WriterDesc = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-left: 10px;
    line-height: 20px;
    .author{
        font-size: 14px;
        color: #333;
    }
    .content{
        font-size: 12px;
        color: #969696;
        margin-top:5px;
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width:60px;
    hieght: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`