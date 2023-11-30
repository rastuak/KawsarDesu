"use client"

import Animelist from '@/components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';
import HeaderMenu from '@/components/utilities/HeaderMenu';
import Pagination from '@/components/utilities/Pagination';
import { useEffect, useState } from 'react';
import { getAnimeResponse } from '@/libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <div className='sm:mr-0 md:mr-72'>
      <HeaderMenu title="Top Anime List" page={page}/>
        <section className='pt-1 shadow-md shadow-slate-300'>
          <Header headerTitle="Top Anime" />
          <Animelist api={topAnime} />
        </section>
      </div>
      <Pagination 
      page={page} 
      lastPage={topAnime.pagination?.last_visible_page}
      setPage={setPage}/>
    </>
  )
}

export default page