import React from 'react'

const HeaderMenu = ({ title, page }) => {
  return (
    <>
        <div className='pt-6 flex justify-center items-center mr-0'>
          <h2 className='text-3xl text-center'> {title} </h2>
          <h3 className='text-lg self-end'> #{page}</h3>
        </div>
    </>
  )
}

export default HeaderMenu