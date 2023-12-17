import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen py-4 bg-gray-100 flex justify-center'>
      <div className='flex flex-col'></div>
      <div className='w-1/3 h-40 flex'>
        <div className='w-[96px]'>
        <div className='w-24 h-24 bg-[url("https://img.y8.com/assets/y8/category-icons/fighting-faa72523c7d962841223ba528c9143cc2a19f9397bb8431c393949e2a06b40ef.svg")]'></div>
        </div>
        <div className=''><div className='py-1.5 font-bold text-3xl'>Fighting Games</div>
        <div className='w-[486px]'>Fighting games were popularized by the famous Street Fighter arcade game and later Mortal Combat grew the category when early consoles were popular. Now you can play many different fighting games in your browser. There are games like ninja games, kung fu games, sumo wrestling, and boxing games.</div>
        </div>
      </div>
      <div className='w-1/3 h-40 px-4'>
        <div className='font-bold text-sm py-4 px-4 text-gray-500'>POPULAR TAGS</div>
        <div className='px-4 flex gap-2'>
          <div className='h-8 w-24 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Beat'em Up</div>
          <div className='h-8 w-16 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Boxing</div>
          <div className='h-8 w-28 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Dragon Ball Z</div>
          <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Fighting</div>
          <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Kung Fu</div>
          <div className='h-8 w-14 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Ninja</div>
        </div>
        <div className='px-4 py-3 flex gap-2'>
        <div className='h-8 w-28 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Street Fighting</div>
        <div className='h-8 w-14 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Sword</div>
        <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Wrestling</div>
        </div>
      </div>
    </div>
  )
}
