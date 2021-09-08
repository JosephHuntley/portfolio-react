import React from 'react'
import image from "../img/skyline.jpg";

const Home = () => {
    return (
        <main >
            <img src={ image } alt="Pictue of skyline" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-32 lg:pt-64 px-8">
                <span>
                <h1 className=" text-3xl lg:text-6xl text-gray-400 cursive leading-none lg:leading-snug">Hello, I'm Joseph</h1>
                <h1 className="text-center text-1xl lg:text-3xl text-gray-400">Full Stack Developer</h1>
                </span>
            </section>
        </main>
    )
}

export default Home