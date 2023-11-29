import Animelist from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';

const Home = async ({params}) => {
  const paramKey = params.keyword
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${paramKey}`)
  const Animes = await response.json()
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