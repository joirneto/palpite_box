import React from 'react'
import Link from 'next/link'
import Pagetitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <Pagetitle title='Contato'/>
      <h1>Contato</h1>
      <div>
        <Link href = '/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato

