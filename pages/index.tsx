import { useState } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { RandomFox } from '<olgaabx>/components/RandomFox'

// generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ]);
  
  return (
    <>
      <Head>
        <title>React with TypeScript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {images.map((image, index) => (
          <div key={index} className='p-4'>
            <RandomFox image={image}/>
          </div>
        ))}
      </main>
    </>
  )
}