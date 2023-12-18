import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <div className='w-full h-[2800px] bg-white'>
        <div className='py-4 px-4'>
          <p className='text-xl font-bold'>What are Strategy Games?</p>
          <p className='text-md font-bold pt-3'>Strategy Games: Tactics and War</p>
          <p className='text-sm pt-1.5'>The strategy video game genre began its story at the time that the personal computer was invented. Now, strategy games are not as popular as many other game genres. However, they still command attention from millions of gamers across around the world, especially when it comes to War games.</p>
          <p className='text-md font-bold pt-3'>Explore Turn-Based and Tower Defense Games</p>
          <p className='text-sm pt-1.5'>This category has some sub genres that further divide up the varying types of strategy games. The most popular ones are Tower Defense games and turn-based strategy games.</p>
          <p className='text-md font-bold pt-3'>War Games: Command and Conquer</p>
          <p className='text-sm pt-1.5'>Throughout the history of mankind, epic wars have constantly put nations and civilizations in danger. In War Games, your mission is to apply tactics and commands with legions of soldiers, and to bring all your enemies to their knees.</p>
        </div>
        <div className='py-4 px-4'>
          <p className='text-xl font-bold'>Best Strategy and RPG Games Tags</p>
          <p className='text-md font-bold pt-3'>Play Our Medieval Games</p>
          <p className='text-sm pt-1.5'>Play games from another era, the medieval era, with castles, knights, and even gladiators. Use your catapults to crush castles and to become the lord of the land, as you conquer the surrounding kingdoms.</p>
          <div className='pt-2'>
            <p className='text-sm'>1. GoodGame Empire</p>
            <p className='text-sm'>2. Diseviled 3: Stolen Kingdom</p>
            <p className='text-sm'>3. Takeover</p>
          </div>
          <p className='text-md font-bold pt-3'>RPG Games on Y8</p>
          <p className='text-sm pt-1.5'>Get into character by playing these role-playing related games. This category of games often involves fantasy games like dungeon and sword type games.</p>
          <div className='pt-2'>
            <p className='text-sm'>1. Dynamons World</p>
            <p className='text-sm'>2. Browserquest</p>
            <p className='text-sm'>3. Jewel Duel</p>
          </div>
          <p className='text-md font-bold pt-3'>Turn-Based Games</p>
          <p className='text-sm pt-1.5'>Turn based games are a subgenre of strategy games and they come from games created before video games. One example, board games are almost always turn-based.</p>
          <div className='pt-2'>
            <p className='text-sm'>1. Compact Conflict</p>
            <p className='text-sm'>2. Battleships</p>
            <p className='text-sm'>3. Look your Loot</p>
          </div>
        </div>
        <div className='py-4 px-4'>
          <p className='text-xl font-bold'>Y8 Recommendations</p>
          <p className='text-md  font-bold pt-3'>Best Free Online Strategy Games</p>
          <div className='pt-2 pl-4'>
            <p className='text-sm'>1. Battle for the Galaxy</p>
            <p className='text-sm'>2. Throne Defender</p>
            <p className='text-sm'>3. Heroes of War MMO</p>
            <p className='text-sm'>4. War Lands</p>
            <p className='text-sm'>5. Shortie's Kingdom 3</p>
          </div>
          <p className='text-md font-bold pt-3'>Most Popular Strategy and RPG Games on Mobile</p>
          <div className='pt-2 pl-4'>
            <p className='text-sm'>1. Age of War</p>
            <p className='text-sm'>2. Rooster Warrior</p>
            <p className='text-sm'>3. Wild Castle</p>
            <p className='text-sm'>4. Keeper of the Grove</p>
            <p className='text-sm'>5. Arcalona</p>
          </div>
          <p className='text-md font-bold pt-3'>Y8.com team Favorites Strategy Games</p>
          <div className='pt-2 pl-4'>
            <p className='text-sm'>1. Dynasty War</p>
            <p className='text-sm'>2. Bug War 2</p>
            <p className='text-sm'>3. Heroes of Myths Warriors of Gods</p>
            <p className='text-sm'>4. Castle Defender Saga</p>
            <p className='text-sm'>5. Supremacy 1914</p>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-200 mt-6'></div>
        <div className='grid gap-8 grid-cols-2 grid-row-2 pt-8 px-8'>
          <div className='w-full h-[410px]'>
            <p className='text-[14px]'>Y8 FREE ONLINE GAMES</p>
            <p className='text-sm py-[16px]'>New Online Free Games</p>
            <p className='text-sm py-[16px]'>Popular Online Free Games</p>
            <p className='text-sm py-[16px]'>Y8 Browser (to play Flash Games)</p>
            <p className='text-sm py-[16px]'>Browse Games Studios</p>
            <p className='text-sm py-[16px]'>Upload</p>
          </div>
          <div className='w-full h-[410px]'>
            <p className='text-[14px]'>UPDATES</p>
            <p className='text-sm py-[16px]'>Forum for Players</p>
            <p className='text-sm py-[16px]'>Twitter</p>
            <p className='text-sm py-[16px]'>Facebook</p>
            <p className='text-sm py-[16px]'>Instagram</p>
            <p className='text-sm py-[16px]'>Discord</p>
          </div>
          <div className='w-full h-[410px]'>
            <p className='text-sm py-[16px]'>COMPANY</p>
            <p className='text-sm py-[16px]'>Term of Use</p>
            <p className='text-sm py-[16px]'>Privacy Policy</p>
            <p className='text-sm py-[16px]'>Cookie Policy</p>
            <p className='text-sm py-[16px]'>Game Publishers</p>
            <p className='text-sm py-[16px]'>Game Developers</p>
            <p className='text-sm py-[16px]'>Send us your message</p>
            <p className='text-sm py-[16px]'>Email Us</p>
          </div>
          <div className='w-full h-[410px]'>
            <p className='text-sm py-[16px]'>FOLLOW US</p>
            <div className='grid grid-cols-2 grid-row-2 '>
              <div className='bg-gray-200 rounded-full flex justify-center items-center'>
                <div className='w-[22px] h-[18px] bg-[url("https://img.y8.com/assets/svg/twitter-40437c6680e014b927c22e09bae7da5f3317948f71fae4e5daee25eb20c63176.svg")]'></div>
              </div>
              <div className='bg-gray-200 rounded-full flex justify-center items-center'>
                <div className='w-[20px] h-[20px] bg-[url("https://img.y8.com/assets/svg/facebook-807ac7b9c731fd2695350e3c8bf65954582dfeacf87bd8a73ab38e0153543daf.svg")]'></div>
              </div>
              <div className='bg-gray-200 rounded-full flex justify-center items-center'>
                <div className='w-[20px] h-[20px] bg-[url("https://img.y8.com/assets/svg/instagram-270989005465900b957b5c234169591ea33e43d5f12a3fd7131f486cf6577cfc.svg")]'></div>
              </div>
              <div className='bg-gray-200 rounded-full flex justify-center items-center'>
                <div className='w-[18px] h-[14px] bg-[url("https://img.y8.com/assets/svg/discord-5fbfb24610991c5e17e89bc628ce593d2f4cfa61b1aa2d12ba7e318728caf974.svg")]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
