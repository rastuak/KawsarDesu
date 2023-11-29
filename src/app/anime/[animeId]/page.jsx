import { getAnimeResponse } from '@/libs/api-libs'
import Image from 'next/image'
Image
const Page = async ({ params: { animeId } }) => {
    const Animes = await getAnimeResponse(`anime/${animeId}`)
    return (
        <div className='flex flex-col p-4 '>
            <br />
            <h1 className='text-3xl text-center'>{Animes.data.title} - {Animes.data.year}</h1>
            <div className='flex gap-4 justify-center'>
                <div className=' rounded-md bg-paletAbu-100 p-0.5 shadow-2xl transition-all hover:bg-paletAbu-200'>
                    <Image
                        width={250}
                        height={250}
                        objectfitimages="cover"
                        src={Animes.data.images.webp.image_url}
                        alt={Animes.data.images.jpg.image_url}
                        className="max-h-64 justify-center  shadow-lg rounded-md"
                    />
                </div>
            </div>
            
            <div className='rounded-md mt-3 bg-paletAbu-100 p-1 shadow-2xl transition-all hover:bg-paletAbu-200'>
                <h1> Synopsis: </h1>
                {Animes.data.synopsis}
            </div>
        </div>
    )
}

export default Page