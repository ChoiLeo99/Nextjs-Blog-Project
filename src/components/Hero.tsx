import React from 'react'
import profileImage from '../../public/Images/LeoImage.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className='text-center'>
            <Image
                className='rounded-full  mx-auto'
                src={profileImage}
                alt='Picture of the author'
                width={250}
                height={250}
                priority
            />
            <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Leo"}</h2>
            <h3 className='text-xl font-semibold'>Full-Stack Engineer</h3>
            <p>개발자가 되고 싶은 사람, 레오</p>
            <Link href="/contact">
                <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
            </Link>
        </section>
    )
}