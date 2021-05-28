import React from 'react'
import Head from 'next/head'

const Pagetitle = ({title}) =>{
  return (
    <Head>
      <title>{title} - Palpitebox</title>
    </Head>
  )
}

export default Pagetitle