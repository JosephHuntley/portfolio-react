import React from 'react'
import image from "../skyline.jpg";

const Home = () => {
    return (
        <main >
            <img src={ image } alt="Pictue of skyline" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-32 lg:pt-64 px-8">
                <h1 className=" text-3xl lg:text-6xl text-blue-400 font-bold cursive leading-none lg:leading-snug home-name">Hello, I'm Joseph</h1>
            </section>
        </main>
    )
}

export default Home