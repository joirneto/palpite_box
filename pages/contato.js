import React from 'react'
import Link from 'next/link'
import Pagetitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <Pagetitle title='Contato'/>
      <div className='w-1/3 mx-auto text-center p-2'>
      <span className='font-bold text-2xl'>Email: contato@contato.teste.com</span>
      </div>
      <div className='w-1/3 mx-auto text-center p-2'>
      <span className='font-bold text-2xl'>Whatsapp: (99) 9 9999 - 9999</span>
      </div>
    </div>
    
  )
}

export default Contato

