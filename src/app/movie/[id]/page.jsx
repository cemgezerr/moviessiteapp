import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {
    const id = params.id

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIxZGMzODExZWU2ZmJkODNmNDNjNzM1YzEzNDUyYyIsInN1YiI6IjY0ZDdmOTVmMDAxYmJkMDBlMzViNjVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crB168aeD3_t2dwsau9L90RJPyaB3pg6FuNEeRsBPyQ'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    const data = await response.json()

    console.log(data);


    return (
        <div className='relative p-7 min-h-screen'>
            <Image src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} fill />
            <div className='absolute '>
                <div className='text-7xl font-bold my-3'>{data.title}</div>
                <div className='w-1/2 text-xl  '>{data.overview}</div>
                <div className='my-3 text-xl '>Tarih: {data?.release_date}- Puan:{data?.vote_average}</div>
                <div className='border w-32 text-xl  hover:bg-white hover:text-black p-3 rounded-md text-center text-lg cursor-pointer text-cyan-50 '>Trail</div>
            </div>
        </div>
    )
}

export default page