'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
   

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
            name: "Yakında Gelicekler",
            url: "upcoming"
        },
    ]

    return (
        <div className='p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center '>
            {tabs.map((tb, i) => (
                <Link
                    className={`cursor-pointer hover:opacity-80 transition-opacity ${tb.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`}
                    key={i}
                    href={`/?genre=${tb.url}`}>{tb.name}</Link>
            ))}
        </div>
    )
}

export default Tabs