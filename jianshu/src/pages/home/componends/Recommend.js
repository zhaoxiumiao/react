import React from 'react'
import{
    RecommendItem,
    RecommendWrapper
} from '../style'

function Recommend(){
    return (
        <RecommendWrapper>
            <RecommendItem />
            <RecommendItem />
        </RecommendWrapper>
    )
}

export default React.memo(Recommend)