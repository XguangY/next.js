import React, { useState } from 'react';
// import moment from 'moment'
import dynamic from 'next/dynamic'
// 懒加载引入自定义组件
const One = dynamic(import('../components/one'))
function Time () {
    const [time, setTime] = useState(Date.now())
    const changeTime = async() => {
        // 异步引入按需加载
        const moment = await import('moment')
        setTime(moment.default(time).format())
    }
    return (
        <>
            <div>{time}</div>
            {/* 组件使用才会被引入 */}
            <One/>
            <button onClick={changeTime}>点击换格式</button>
        </>
    )
}

export default Time