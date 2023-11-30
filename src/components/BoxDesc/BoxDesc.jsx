import React from 'react'

const BoxDesc = ({title, desc}) => {
  return (
    <>
    <div className='bg-paletAbu-800 hover:bg-paletAbu-700 h-18 w-24 justify-center items-center text-center p-1.5 rounded-lg shadow-2xl text-white'>
       <h1> {title} </h1>
       <p> {desc} </p> 
    </div>
    </>
  )
}

export default BoxDesc