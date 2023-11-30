import Animelist from '../components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';
import { getAnimeResponse } from '@/libs/api-libs'


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const randomAnime = await getAnimeResponse("random/anime","")
  return (
    <>
      <div className='flex'>
        <div className='w-screen mr:0 md:mr-72'>
          <section className='pt-1 shadow-md shadow-slate-300'>
            <Header headerTitle="Top Anime" linkHref="/top" linkTitle="See all" />
            <Animelist api={topAnime} />
          </section>
          <section className='pt-1 shadow-md shadow-slate-300'>
            <Header headerTitle="Recommended Anime" linkHref="/top" linkTitle="See all" />
            <Animelist api={topAnime} />
          </section>
        </div>
        {/* <div
          className='fixed bg-paletKuning-coba w-64 top-20 right-0 h-96 text-center text-3xl text-bold py-36'>
          Tunggu fitur selanjutnya ^-^
        </div> */}
      </div>
    </>
  )
}

export default Page