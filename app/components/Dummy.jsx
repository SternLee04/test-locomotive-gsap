/** @format */

import {useRef} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Dummy() {
	const containerRef = useRef(null)
	const tl = useRef(null)

	useGSAP(
		() => {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: ".container",
					endTrigger: ".container",
					start: "top 40%",
					end: "60% 40%",
					markers: true,
					pin: true,
					scrub: 0.5,
				},
			})


			tl.current
        .to('.svgElement',{
          ease: 'expo',
          scale: 1.5
        })
        .to('.svgElement',{
          ease: 'linear',
          scale: 1
        })
				.from(".textLeft", {
					ease: "linear",
					y: "20em",
					opacity: 0,
				})
				.from(".textRight", {
					y: "20em",
					ease: "linear",
					opacity: 0,
				})
				.to(".textLeft", {
					ease: "linear",
					y: "20em",
					opacity: 0,
				})
        .to(".textRight", {
          ease: "linear",
          y: "20em",
          opacity: 0,
        })
		},
		{scope: containerRef},
	)

	return (
		<main ref={containerRef}>
			<section className="flex justify-center items-center bg-zinc-900 overflow-hidden">
				<div className="container mb-[25%] space-y-8 bg-zinc-600 w-80 flex flex-col items-center p-10 rounded-lg overflow-hidden">
					<div className="svgElement h-40 w-40 bg-blue-400 text-center rounded-md">
						svg element
					</div>
					<div className="textLeft flex flex-col items-start text-white">
						<h1 className="text-lg">heading left</h1>
						<p>lorem say anything to do.</p>
					</div>
					<div className="textRight flex flex-col items-start text-white">
						<h1 className="text-lg">heading right</h1>
						<p>lorem say anything to do.</p>
					</div>
				</div>
			</section>
		</main>
	)
}
