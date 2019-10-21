import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

function XUXU({router,list}) {
    return (
        <>  
            <div>{router.query.name}</div>
            <div >{list}</div>
            <Link href="/"><a>返回</a></Link>
        </>
    )
}
 XUXU.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
            axios('https://www.easy-mock.com/mock/5d4b7f412b2be649f7fe3542/reactDemo/menuBar').then(
                (res)=>{
                    console.log('远程数据结果：',res)
                    resolve(res.data.data)
                }
            )
    })
    return await promise
}


export default withRouter(XUXU)