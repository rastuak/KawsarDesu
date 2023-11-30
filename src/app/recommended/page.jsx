"use client"

import Animelist from '@/components/AnimeList/index';
import Header from '@/components/AnimeList/Header.jsx';
import HeaderMenu from '@/components/utilities/HeaderMenu';
import Pagination from '@/components/utilities/Pagination';
import { useEffect, useState } from 'react';
import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/api-libs';


const page = async () => {
    let recomendAnime = await getNestedAnimeResponse("recommendations/anime","entry")
    recomendAnime = {data: recomendAnime}

    return (
        <>
            <div className='sm:mr-0 md:mr-72'>
                <HeaderMenu title="Recommended Anime List"/>
                <section className='pt-1 shadow-md shadow-slate-300'>
                    <Header headerTitle="Recommended Anime" />
                    <Animelist api={recomendAnime} />
                </section>
            </div>
        </>
    )
}

export default page