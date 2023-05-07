import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <main className="flex flex-col item-center justify-center w-full flex px-20 text-center">
       <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
         <div className='w-3/5 p-5'>
           <p> Sign in signature</p>    
          </div>
         <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
           <h2 className='text-3xt font-bold mb-2'>Hello friend</h2>
           <div className='border-2 w-10 border-white inline-block mb-2'></div>
           <p>Fill up personal information </p>
         </div>
       </div>
      </main>
    </div>
 
      
    </>
  )
}
