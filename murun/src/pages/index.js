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
        <div className=''><div className='py-1.5 font-bold text-3xl'>Sports Games</div>
        <div className='w-[486px]'>People have been making sports games for a long time, so there are many different sports to choose from including basketball, football, snowboarding, surfing, sumo fighting, and way more. What ever sport is your favorite, enjoy these top sport games for endless entertainment.</div>
        </div>
      </div>
      <div className='w-1/3 h-40 px-4'>
        <div className='font-bold text-sm py-4 px-4 text-gray-500'>POPULAR TAGS</div>
        <div className='px-4 flex gap-2'>
          <div className='h-8 w-24 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Adrenaline'em Up</div>
          <div className='h-8 w-16 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>American Football</div>
          <div className='h-8 w-28 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Baseball</div>
          <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Basketball</div>
          <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Bowling</div>
          <div className='h-8 w-14 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Cricket</div>
        </div>
        <div className='px-4 py-3 flex gap-2'>
        <div className='h-8 w-28 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Skateboard</div>
        <div className='h-8 w-14 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Snooker</div>
        <div className='h-8 w-20 bg-white rounded-xl flex items-center justify-center font-semibold text-sm text-cyan-600'>Hockey</div>
        </div>
      </div>
    </div>
  )
}
