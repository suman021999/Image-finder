import React, { useContext } from 'react'
import { ImageContext } from '../../pages/Mainpage'
import Img from './Img'
import Skeleton from './Skleton'

const Images = () => {

    const{responce,isLoding,serachImage}=useContext(ImageContext)
  return (
    <>
      <h1 className='text-center mt-6 underline text-2xl'>{`Results of ${serachImage || 'Cats'}`}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
            {isLoding?<Skeleton item={10}/>: responce.map((data,key)=><Img data={data} key={key}/>)}
            
      </div>
    </>

  )
}

export default Images
