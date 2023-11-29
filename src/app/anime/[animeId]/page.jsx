import React from 'react'

const Page = async ({ params }) => {
    const paramId = params.animeId
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime`)
    const Animes = await response.json()
    
    console.log(Animes)
    
    return (
        <>
        <br/>
            <div className='text-3xl'>
                {paramId}
            </div>
        </>
    )
}

export default Page