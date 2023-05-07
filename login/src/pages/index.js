import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
         <div className='bg-color'>
         <div><p>Sign in Section</p></div>
         <div><p>Sign in Section</p></div>
         </div>
      </main>
    </div>
      
      
    </>
  )
}

//import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//     <h2>Hello World</h2>
//     </div>
//     <div className="bg-gray-100">
//       <Head>
//         <title>My Next.js App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-4xl mx-auto p-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">
//           Welcome to my Next.js app!
//         </h1>
//         <p className="text-gray-700">
//           This is a starter project created with Next.js and Tailwind CSS.
//         </p>
//       </main>
//     </div>
//   )
// }
