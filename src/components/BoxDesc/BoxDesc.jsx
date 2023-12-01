import React from 'react'

const BoxDesc = ({title, desc}) => {
  return (
    <>
    <div className='bg-paletAbu-800 hover:bg-paletAbu-700 hover:scale-105 h-18 w-auto px-2 justify-center items-center text-center py-1 rounded-lg shadow-2xl text-white'>
       <h1 className='font-bold'> {title} </h1>
       <p> {desc} </p> 
    </div>
    </>
  )
}

export default BoxDesc