import React from 'react'
import Link from 'next/link'

const Card = ({movie}) => {
  const IMAGE_BASE_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
  return (
    <div>
        <Link href={"/movies/"+movie.id} className='text-decoration-none'>
            <div className='card' style={{width: '15rem'}}>
                <img src={IMAGE_BASE_PATH+movie.poster_path} alt="" className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-text overflow-y-auto' style={{height: '150px'}}>{movie.overview}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card