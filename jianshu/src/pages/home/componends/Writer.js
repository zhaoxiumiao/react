import React from 'react'
import {
    WriterWrapper,
    WriterTop,
    WriterBot,
    WriterBotItem,
    WriterDesc
} from '../style'

function Writer(){
    return (
        <WriterWrapper>
            <WriterTop>
                <span>推荐作者</span>
                <span>
                    <span className="iconfont">&#xe606;</span>
                    换一批
                </span>
            </WriterTop>
            <WriterBot>
                <WriterBotItem>
                    <img className="avatar" src="https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <WriterDesc>
                        <a className="author">婠婠</a>
                        <p className="content">写了20.7k字 · 1.9k喜欢</p>
                    </WriterDesc>
                    <span className="attention">+关注</span>
                </WriterBotItem>
                <WriterBotItem>
                    <img className="avatar" src="https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <WriterDesc>
                        <a className="author">婠婠</a>
                        <p className="content">写了20.7k字 · 1.9k喜欢</p>
                    </WriterDesc>
                    <span className="attention">+关注</span>
                </WriterBotItem>
                <WriterBotItem>
                    <img className="avatar" src="https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <WriterDesc>
                        <a className="author">婠婠</a>
                        <p className="content">写了20.7k字 · 1.9k喜欢</p>
                    </WriterDesc>
                    <span className="attention">+关注</span>
                </WriterBotItem>
                <WriterBotItem>
                    <img className="avatar" src="https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <WriterDesc>
                        <a className="author">婠婠</a>
                        <p className="content">写了20.7k字 · 1.9k喜欢</p>
                    </WriterDesc>
                    <span className="attention">+关注</span>
                </WriterBotItem>
                <WriterBotItem>
                    <img className="avatar" src="https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    <WriterDesc>
                        <a className="author">婠婠</a>
                        <p className="content">写了20.7k字 · 1.9k喜欢</p>
                    </WriterDesc>
                    <span className="attention">+关注</span>
                </WriterBotItem>
            </WriterBot>
        </WriterWrapper>
    )
}

export default React.memo(Writer)