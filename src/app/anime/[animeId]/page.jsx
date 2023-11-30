import BoxDesc from '@/components/BoxDesc/BoxDesc'
import { getAnimeEpisodeById, getAnimeResponse } from '@/libs/api-libs'
import Image from 'next/image'
import VideoPlayer from '@/components/utilities/VideoPlayer';

const Page = async ({ params: { animeId } }) => {
    const Animes = await getAnimeResponse(`anime/${animeId}`)

    const episodeanime = await getAnimeEpisodeById(animeId)
    // console.log(episodeanime.data)
    // console.log(Animes.data.background)


    return (
        <div className='flex flex-col p-4 gap-3'>
            <br />
            <h1 className='text-3xl text-center'>{Animes.data.title} - {Animes.data.season} {Animes.data.year}</h1>
            <div className='flex flex-wrap sm:flex-nowrap gap-4 justify-center'>
                <div className='rounded-md bg-paletAbu-100 p-0.5 shadow-2xl transition-all hover:bg-paletAbu-200'>
                    <Image
                        width={250}
                        height={250}
                        objectfitimages="cover"
                        src={Animes.data.images.webp.image_url}
                        alt={Animes.data.images.jpg.image_url}
                        className="justify-center  shadow-lg rounded-md"
                    />
                </div>
                <div className='self-center p-1 shadow-xl '>
                    <VideoPlayer youtubeId={Animes.data.trailer.youtube_id} />
                </div>
            </div>
            <div className='grid grid-cols-2 md:flex self-center justify-center items-center gap-4'>
                <BoxDesc title='' desc={`${Animes.data.rating}`} />
                <BoxDesc title='Rank' desc={`${Animes.data.rank}`} />
                <BoxDesc title='Rating' desc={`${Animes.data.score}`} />
                <BoxDesc title='Status' desc={`${Animes.data.status}`} />
                <BoxDesc title='Episode' desc={`${Animes.data.episodes}`} />
                <BoxDesc title='Duration' desc={`${Animes.data.duration}`} />
            </div>
            <div className='text-justify self-center rounded-md w-4/5 bg-paletAbu-100 p-2 shadow-2xl transition-all hover:bg-paletAbu-200'>
                <h1 className='font-bold'> Synopsis: </h1>
                {Animes.data.synopsis}
            </div>
            <div className='text-justify self-center rounded-md w-4/5 bg-paletAbu-100 p-2 shadow-2xl transition-all hover:bg-paletAbu-200'>
                <h1 className='font-bold'> Episodes: </h1>
                belom ya ges ya
            </div>
            {/* <div className='self-center p-1 shadow-xl '>
                <p className='text-xl font-bold'> Trailer: </p>
                <VideoPlayer youtubeId={Animes.data.trailer.youtube_id}/>
            </div> */}
        </div>
    )
}

export default Page