import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ params }) => {
    const keyword = params.keyword;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIxZGMzODExZWU2ZmJkODNmNDNjNzM1YzEzNDUyYyIsInN1YiI6IjY0ZDdmOTVmMDAxYmJkMDBlMzViNjVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crB168aeD3_t2dwsau9L90RJPyaB3pg6FuNEeRsBPyQ'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US&page=1`, options);
    const data = await res.json();
    if (!res.ok) {
        console.error('API isteği başarısız oldu:', res.status, res.statusText);
        return null;
    }

    console.log(data, "dataaaaaaaaa");

    return (
        <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            {
                !data?.results ? <div className="not-found text-red-500 text-center">Aranılan şey bulunamadı</div> :
                data?.results?.map((movieData, i) => (
                    <Movies data={movieData} key={i} />
                ))
            }
        </div>
    );
        }

export default Page;
