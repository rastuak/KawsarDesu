import Animelist from '@/components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top/anime`)
  const topAnime = await response.json()

  return (
    <>
      <div className='sm:mr-0 md:mr-72'>
        <section className='pt-1 mt-2 shadow-md shadow-slate-300'>
          <Header headerTitle="Top Anime"/>
          <Animelist api={topAnime} />
        </section>
      </div>
    </>
  )
}

export default page