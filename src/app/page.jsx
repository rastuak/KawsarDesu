import Animelist from '../components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';
import {getAnimeResponse} from '@/libs/api-libs'


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  
  return (
    <>
      <div className='sm:mr-0 md:mr-72'>
        <section className='pt-1 shadow-md shadow-slate-300'>
          <Header headerTitle="Top Anime" linkHref="/top" linkTitle="See all" />
          <Animelist api={topAnime} />
        </section>
        <section className='pt-1 shadow-md shadow-slate-300'>
          <Header headerTitle="Recommended Anime" linkHref="/top" linkTitle="See all" />
          <Animelist api={topAnime} />
        </section>
      </div>
    </>
  )
}

export default Page