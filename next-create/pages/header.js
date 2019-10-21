// import Head from 'next/head'
import MyHeader from '../components/myHeader'
import '../static/test.css'
import {Button} from 'antd'
function Header() {
    return (
        <>
            {/* <Head>
                <title>哈哈哈标题</title>
            </Head> */}
            <MyHeader></MyHeader>
            <div><Button>我是按钮</Button></div>
            <div>啊哈哈哈哈哈</div>
        </>
    )
}
export default Header