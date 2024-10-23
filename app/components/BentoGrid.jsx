/** @format */

import Image from "next/image"
import React from "react"

const cards = [
	{id: 1, size: "2x1", url: "/technologies/nextJs.svg"},
	{id: 2, size: "1x1", url: "/technologies/vercel.svg"},
	{id: 3, size: "1x1", text: "https://azumbrunnen.me/nga-closeup2.8499a9ba.png"},
	{id: 5, size: "1x2", text: "https://azumbrunnen.me/nga-closeup2.8499a9ba.png"},
	{id: 4, size: "1x1", text: "https://azumbrunnen.me/nga-closeup2.8499a9ba.png"},
	{id: 6, size: "1x2", url: "/technologies/nodeExpressJs.svg"},
	{id: 7, size: "1x1",},
	{id: 8, size: "1x1", url: "/technologies/cloudflare.svg"},
	{id: 9, size: "1x1", url: "/technologies/vite.svg"},
	{id: 11, size: "1x1"},
	{id: 10, size: "2x2", url: "/technologies/react.svg"},
	{id: 12, size: "1x1"},
	{id: 13, size: "1x1"},
	{id: 14, size: "1x1"},
	{id: 16, size: "2x1", url: "/technologies/mongoDB.svg"},
	{id: 15, size: "1x1"},
	{id: 17, size: "1x1"},
]

export default function BentoGrid() {
	return (
		<main className="py-16 overflow-hidden">
			<div className="grid w-full grid-flow-dense grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 mx-auto">
				{cards.map((card) => (
					<div
						key={card.id}
						onClick={() => window.open(card.url)}
						className={`relative cursor-pointer text-white overflow-hidden gradient-linear rounded-xl border-2 border-black flex items-center justify-center
              ${card.size === "1x1" ? "aspect-square" : ""}
              ${card.size === "2x1" ? "col-span-2 aspect-[2/1]" : ""}
              ${card.size === "1x2" ? "row-span-2 aspect-[1/2]" : ""}
              ${card.size === "2x2" ? "col-span-2 row-span-2 aspect-square" : ""}
              ${card.id === 10 ? "lg:col-start-3 lg:row-start-2 md:col-start-2 md:row-start-4 row-start-7" : ""}
              ${card.id === 16 ? "lg:col-start-4" : ""}
            `}>
						<img
							className="w-full h-full object-cover rounded-xl"
							src={card.url}
              alt="card image"
						/>
						<div
							className="absolute z-10 inset-0 flex items-center justify-center bg-opacity-70 bg-zinc-900 backdrop-blur-lg transition-all duration-300 ease-linear hover:opacity-100 opacity-0">
							<p className="text-white text-center text-lg px-4">
								{card.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}
