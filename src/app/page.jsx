import Animelist from '../components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';
import { getAnimeResponse, getNestedAnimeResponse, randomNums } from '@/libs/api-libs'


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  // const kocokAngka = Math.floor(Math.random()*192)
  let recomendAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  // recomendAnime = {data: recomendAnime.slice(kocokAngka-1,kocokAngka+7)}
  recomendAnime = {data: randomNums(recomendAnime, 10)}


  return (
    <>
    <br/>
      <div className='flex'>
        <div className='justify-center mx-2 md:mx-24 lg:mx-24 xl:mx-48'>
          <section className='pt-1 shadow-md shadow-slate-300'>
            <Header headerTitle="Top Anime" linkHref="/top" linkTitle="See all" />
            <Animelist api={topAnime} />
          </section>
          <section className='pt-1 shadow-md shadow-slate-300'>
            <Header headerTitle="Recommended Anime" linkHref="/recommended" linkTitle="See all" />
            <Animelist api={recomendAnime} />
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