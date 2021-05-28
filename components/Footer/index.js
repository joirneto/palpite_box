import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 p-4'>
      <div className='conteiner mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:
        Joir Neto / {' '}
        <a className='hover:underline' href="https://linkedin.com/in/joir-neto">Linkedin</a> / {' '}
        <a className='hover:underline' href="https://github.com/joirneto">Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png'/>
        </div>
        </div>
    </div>
  )
}

export default Footer