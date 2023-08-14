'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Movies = ({ data }) => {
    const router = useRouter()


    return (
        <div onClick={() => router.push(`/movie/${data?.id}`)} className='relative cursor-pointer'>
            <Image src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} width={410} height={410} />
            <div className='absolute bottom-0 p-3'>
                <div className='text-2xl font-bold'>{data?.title}</div>
                <div>Tarih: {data?.release_date}</div>
                <div>Puan:{data?.vote_average}</div>
            </div>
        </div>
    )
}

export default Movies