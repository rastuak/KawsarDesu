import Animelist from '../components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=10`)
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime?rating=rx`)
  const topAnime = await response.json()
  const hotAnime = await response2.json()


  return (
    <>
      <div className='sm:mr-0 md:mr-72'>
        <section className='pt-1 mt-2 shadow-md shadow-slate-300'>
          <Header headerTitle="Top Anime" linkHref="/top" linkTitle="See all" />
          <Animelist api={topAnime} />
        </section>
        <section className='pt-1 mt-2 shadow-md shadow-slate-300'>
          <Header headerTitle="Top Anime" linkHref="/top" linkTitle="See all" />
          <Animelist api={topAnime} />
        </section>
      </div>
    </>
  )
}

export default Home