import React from 'react'

const cards = [
  { id: 1, size: '2x1', url: "gihub"},
  { id: 2, size: '1x1' },
  { id: 3, size: '1x1' },
  { id: 5, size: '1x2' },
  { id: 4, size: '1x1' },
  { id: 6, size: '1x2' },
  { id: 7, size: '1x1' },
  { id: 8, size: '1x1' },
  { id: 9, size: '1x1'} ,
  { id: 10, size: '2x2'},
  { id: 11, size: '1x1'},
  { id: 12, size: '1x1' },
  { id: 13, size: '1x1' },
  { id: 14, size: '1x1' },
  { id: 16, size: '2x1' },
  { id: 15, size: '1x1' },
  { id: 17, size: '1x1' },
]

export default function BentoGrid() {
  return (
    <main className="py-20 overflow-hidden">
      <div className="grid w-full grid-flow-dense grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => window.open(card.url)}
            className={`bg-zinc-900 text-white border-2 overflow-hidden border-black rounded-xl flex items-center justify-center font-bold text-2xl
              ${card.size === '1x1' ? 'aspect-square' : ''}
              ${card.size === '2x1' ? 'col-span-2 aspect-[2/1]' : ''}
              ${card.size === '1x2' ? 'row-span-2 aspect-[1/2]' : ''}
              ${card.size === '2x2' ? 'col-span-2 row-span-2 aspect-square' : ''}
              ${card.id === 10 ? 'lg:col-start-3 lg:row-start-2 md:col-start-2 md:row-start-4' : ''}
              ${card.id === 16 ? 'lg:col-start-4': ''}
            `}
          >
            {/* <div className='flex items-center justify-center w-full h-full overflow-hidden transition-all duration-300 opacity-0 hover:opacity-100'>
              {card.url}
            </div> */}

          </div>
        ))}
      </div>
    </main>
  )
}