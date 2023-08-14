'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {
    const searchParams = useSearchParams()
    let genre = searchParams.get('genre')
   
    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "En Yüksek Puan",
            url: "top_rated"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        },
    ]



    const [loading, setLoading] = useState(false);

    const handleTabClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }

    return (
        <div className='p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center '>
            {tabs.map((tb, i) => (
                <Link
                    onClick={handleTabClick}
                    className={`cursor-pointer hover:opacity-80 transition-opacity ${tb.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`}
                    key={i}
                    href={`/?genre=${tb.url}`}>
                    {tb.name}
                </Link>
            ))}
            {loading}
        </div>
    )
}

export default Tabs;
