import React from 'react'
import Link from 'next/link'
import Pagetitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='mx-auto p-2'>
      <h1 className='text-xl text-3xl text-center p-4' >Restaurante X </h1>
      <Pagetitle title='Sobre'/>
      <div className = 'container mx-auto p-2 mb-4'>
        <Link href='/'>
          <a href=""><img className = 'mx-auto' src='/image01-700.jpg' alt='image01' /></a>
          </Link>
      </div>
      <p className=' mx-auto px-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime, fuga saepe distinctio tenetur voluptatum consectetur nulla optio    officiis eum quo reprehenderit veritatis nesciunt rem? Aperiam ipsa reprehenderit adipisci eius?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae blanditiis consequuntur possimus hic exercitationem non iste molestiae dolores illo. Pariatur itaque aliquam libero, debitis vero quia. Possimus, dicta earum.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta a officiis voluptates accusamus tempore molestiae natus unde eligendi nulla tenetur doloremque culpa aperiam similique porro inventore, qui quos dolore.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nam cumque eius id ipsum labore omnis dolores possimus ex iste, mollitia corporis nostrum, cupiditate placeat doloremque. Error optio soluta debitis.</p>
      <br/>
      <p className=' mx-auto px-20 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime, fuga saepe distinctio tenetur voluptatum consectetur nulla optio    officiis eum quo reprehenderit veritatis nesciunt rem? Aperiam ipsa reprehenderit adipisci eius?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae blanditiis consequuntur possimus hic exercitationem non iste molestiae dolores illo. Pariatur itaque aliquam libero, debitis vero quia. Possimus, dicta earum.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta a officiis voluptates accusamus tempore molestiae natus unde eligendi nulla tenetur doloremque culpa aperiam similique porro inventore, qui quos dolore.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nam cumque eius id ipsum labore omnis dolores possimus ex iste, mollitia corporis nostrum, cupiditate placeat doloremque. Error optio soluta debitis.</p>

    </div>
  )
}

export default Sobre