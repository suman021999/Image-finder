import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Images from '../components/Image/Images'
import useAxios from '../Hooks/useAxios'


export const ImageContext=createContext()

const Mainpage = () => {

  const [serachImage,setSerachImage]=useState('')
  const { responce,isLoding,error,fetchData}=useAxios(`search/photos?page=1&query=cats&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
console.log(responce)

const value={
  responce,isLoding,error,fetchData,serachImage,setSerachImage
}

  return (
    <>
    <ImageContext.Provider value={value}>
    <Navbar/>
    <Images/>
    </ImageContext.Provider>
         
    </>
  )
}

export default Mainpage
