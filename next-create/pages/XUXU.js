import {withRouter} from 'next/router'
import Link from 'next/link'

function XUXU({router}) {
    return (
        <>  
            <div>{router.query.name}</div>
            <Link href="/"><a>返回</a></Link>
        </>
    )
}

export default withRouter(XUXU)