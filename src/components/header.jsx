'use client'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link' // Link bileşenini ekledik
import MenuItem from './MenuItem'
import ThemaComp from './ThemaComp'
import { useRouter } from 'next/navigation'

const Header = () => {

    const [keyword,setKeyword] = useState("")
    const router = useRouter()

    const menu = [
        {
            name: "About",
            url:"/about"
        },
        {
            name: "Sign In",
            url:"/login"
        },
    ]

    const searchFunc = (e) => {
        if(e.key === "Enter" && keyword.length >= 3){
            router.push(`search/${keyword}`)
            setKeyword("")
        }
      
    }

    return (
        <div className='flex items-center gap-5 h-20 p-5'>
            <Link href="/" className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>
                MovieApp
            </Link>
            <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
                <input value={keyword} onKeyDown={searchFunc} onChange={(e) => setKeyword(e.target.value)} className='outline-none  flex-1 bg-transparent' placeholder='arama yapınız' type='text' />
                <BsSearch size={25} />
            </div>
            <ThemaComp />
            {
            menu.map((mn,i)=>(
                <MenuItem mn={mn} key={i} />
                ))
            }
        </div>
    )
}

export default Header;
