import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {
  const handlePageNext = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePagePrev = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0
    })
  }

  return (
    <>
      <br />
      <div className='flex gap-4 px-3 py-6 text-lg bg-paletKuning-coba justify-center items-center'>
        {
          page > 1 ?
          <button
            className='transition-all hover:font-bold hover:text-xl'
            onClick={handlePagePrev}
          >Prev</button> : null
        }
        {page} of {lastPage}
        {
          page < 1040 ?
        <button
          className='transition-all hover:font-bold hover:text-xl'
          onClick={handlePageNext}
        >Next</button> : null
        }
      </div>
    </>
  )
}

export default Pagination