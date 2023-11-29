import Animelist from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import { getAnimeResponse } from '@/libs/api-libs';

const Home = async ({params}) => {
  const paramKey = params.keyword
  const Animes = await getAnimeResponse("anime" , `q=${paramKey}`)
  const decodedParamKey = decodeURI(paramKey)

  return (
    <>
    <div className=''>
      <Header headerTitle={`Pencarian untuk ${decodedParamKey}...`}/>
      <Animelist api={Animes} />
    </div>
    </>
  )
}

export default Home