import React from 'react'

const HeaderMenu = ({title , page}) => {
  return (
    <>
    <br/>
      <div className='pt-1 flex justify-center mr-72'>
        <h2 className='text-3xl'> {title} </h2>
        <h3 className='text-lg self-end'> #{page}</h3>
      </div>
    </>
  )
}

export default HeaderMenu