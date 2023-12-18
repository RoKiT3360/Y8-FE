import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Body() {
  return (
    <div className='w-full h-[2360px] py-4 bg-gray-200 justify-center'>
      <div className='flex'>
        <div className='w-[92px]'>
        <div className='w-[92px] h-[92px] bg-[url("https://img.y8.com/assets/y8/category-icons/strategy-71be55c93bd5de4aa8dcce96682d31040e2a19d013710119a2e6acb63d8b5786.svg")]'></div>
        </div>
        <div className=''>
          <div className='w-[276px] h-[25px] mt-[14px] mb-[5px] font-bold text-lg'>Strategy and RPG Games</div>
          <div className='w-[276px] h-[198px] text-sm'>Welcome to the list of top strategy games available in your web browser. If you enjoy the intense gameplay of strategy and RPG games, you need to see these games. At Y8, there are many different types of strategy games like tower defense, real-time strategy, role playing games, turn bases, MMO, and classic board games. Also there are hack and slash or dungeon crawl games here.</div>
        </div>
      </div>
      <div className='w-full h-[159.39px] pt-[20px] flex flex-col items-center gap-2'>
        <a className='font-bold text-sm text-gray-600'>POPULAR TAGS</a>
        <div className='flex flex-row gap-3'>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Knight</div>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Magic</div>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Medieval</div>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>MMO</div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Role Playing</div>
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Sword</div >
          <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Tower Defense</div>
        </div>
        <div className='bg-white py-[6px] px-[10px] font-bold text-sm rounded-xl text-cyan-600'>Turn Based</div>
      </div>
      <div className='grid gap-4 grid-row-2 grid-cols-2 px-4 py-[20px] h-[1920px]'>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
          <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>3D Chess</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>75%</p>
              </div>
              <p className='text-[11px] text-gray-500'>600,000 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Takeover</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>64%</p>
              </div>
              <p className='text-[11px] text-gray-500'>513,413 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Rum & Gum</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>84%</p>
              </div>
              <p className='text-[11px] text-gray-500'>532,125 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Wild Castle</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>77%</p>
              </div>
              <p className='text-[11px] text-gray-500'>623,012 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Squid Battle Simulator</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>54%</p>
              </div>
              <p className='text-[11px] text-gray-500'>863,645 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Kiomet</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>69%</p>
              </div>
              <p className='text-[11px] text-gray-500'>696,969 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Supremacy 1914</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>53%</p>
              </div>
              <p className='text-[11px] text-gray-500'>245,764 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Age of War</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>90%</p>
              </div>
              <p className='text-[11px] text-gray-500'>22,543,312 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Tiny Rifles</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>85%</p>
              </div>
              <p className='text-[11px] text-gray-500'>8,549,729 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Day D: Tower Rush</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>77%</p>
              </div>
              <p className='text-[11px] text-gray-500'>2,983,242 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Winter Falling</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>89%</p>
              </div>
              <p className='text-[11px] text-gray-500'>3,645,542 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Raid Heroes: Total War</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>51%</p>
              </div>
              <p className='text-[11px] text-gray-500'>27,312 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Plants</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>78%</p>
              </div>
              <p className='text-[11px] text-gray-500'>2,620,782 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Cursed Treasure</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>90%</p>
              </div>
              <p className='text-[11px] text-gray-500'>2,274,926 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Comman Ant Conquer</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>73%</p>
              </div>
              <p className='text-[11px] text-gray-500'>439,613 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Battle of Aliens</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>83%</p>
              </div>
              <p className='text-[11px] text-gray-500'>12,329 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Draughts</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>67%</p>
              </div>
              <p className='text-[11px] text-gray-500'>220,871 plays</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md flex relative bg-[url("https://i.pinimg.com/564x/b1/75/1d/b1751d1f45c23038d57cf67b990c211f.jpg")]'>
        <div className='absolute w-full h-[70px] bottom-0 bg-white rounded-b-md flex p-2'>
            <div className='flex flex-col text-sm'>
              <p className='font-semibold'>Ars Dei</p>
              <div className='flex flex-row items-center'>
                <p className='font-semibold text-[12px] text-red-700'>HTML5</p>
                <div className='w-[2px] h-[2px] rounded-full bg-black m-1'></div>
                <p className='font-semibold text-[12px] text-green-700'>91%</p>
              </div>
              <p className='text-[11px] text-gray-500'>829,763 plays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
