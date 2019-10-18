import React from 'react'
import Link from "next/link";
import Router from 'next/router'
const Home = () => {
  function goXu1() {
    Router.push('/xu1')
  }
  function goXU() {
    Router.push({
      pathname: '/XUXU',
      query: {
        name: '小小徐'
      }
    })
  }
  return (
    <div>
      <div>首页</div>
      <Link href="/xu1"><a>xu1</a></Link>
      <Link href="/xu2"><a>xu2</a></Link>
      <div>
        <button onClick={goXu1}>去xu1</button>
      </div>
      <Link href="/XUXU?name=老徐"><a>老徐过去</a></Link>
      <br/>
      <Link href="/XUXU?name=小徐"><a>小徐过去</a></Link>
      <div>
        <button onClick={goXU}>小小徐过去</button>
      </div>
    </div>
  )
}

export default Home
