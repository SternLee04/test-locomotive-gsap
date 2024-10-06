/** @format */

import React from "react"
import GreenButton from "./GreenButton.jsx"

export default function Hero() {
	return (
		<>
			<main className="m-auto max-w-[1440px] px-[20px] text-white">
				<section className="md:mx-[7%] md:gap-10 gap-8 flex flex-col">
					<h1 className="text-5xl md:text-7xl mt-32">
						<div>hi.</div>
						<div>
							i<span>´</span>m
						</div>
						Jay Vadalia
					</h1>
						<p className=" font-semibold md:text-lg md:leading-7 text-zinc-100 md:w-[35rem]">
							I’m a React developer focused on building engaging web apps, with a
							passion for creating industrial-grade products at the crossroads of dev,
							design, and AI.
						</p>
					<div>
						<GreenButton />
					</div>
				</section>
			</main>
		</>
	)
}
