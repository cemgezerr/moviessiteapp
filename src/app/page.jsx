import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ searchParams }) => {


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIxZGMzODExZWU2ZmJkODNmNDNjNzM1YzEzNDUyYyIsInN1YiI6IjY0ZDdmOTVmMDAxYmJkMDBlMzViNjVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crB168aeD3_t2dwsau9L90RJPyaB3pg6FuNEeRsBPyQ'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${searchParams.genre}`, options)
    const data = await res.json()




    return (
        <div className='flex items-center flex-wrap gap-3 justify-center' >
           {data?.results?.map((data,i)=>(
            <Movies data={data} key={i} />
            ))}
        </div>
    )
}

export default Page