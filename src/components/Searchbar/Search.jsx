import React, { useContext, useState } from 'react'
import { ImageContext } from '../../pages/Mainpage';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSerachImage } = useContext(ImageContext);


  const handleChange=(e)=>{
    setSearchValue(e.target.value)
  }
  const handelButton=(e)=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
    setSearchValue("")
    setSerachImage(searchValue)
  }

  const handleenterserach=(ev)=>{
    if(ev.key==='Enter'){
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
    setSearchValue("")
    setSerachImage(searchValue)
    }
  }

  return (
    <>
      <div className='flex'>
        <input onKeyDown={handleenterserach} value={searchValue} onChange={handleChange}  className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none rounded-bl rounded-tl focus:ring-2 focus:border-blue-500 focus:ring-blue-200' type="text" placeholder='Search anything ...'/>
        <button onClick={handelButton}  disabled={!searchValue}  className='bg-blue-600 px-6 py-2.5 text-white rounded-br rounded-tr focus:ring-2 focus:ring-blue-200 disabled:bg-gray-400'>search</button>
      </div>
    </>
  )
}

export default Search
