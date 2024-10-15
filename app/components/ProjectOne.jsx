/** @format */


// import React, {useRef, useState} from "react"
// import gsap from "gsap"
// import {useGSAP} from "@gsap/react"
// import SubProjectOne from "./SubProjectOne.jsx"
import Video from "./Video.jsx"

export default function ProjectOne() {
	// const videoRef = useRef(null)
	// const [isPlaying, setIsPlaying] = useState(false)
	// const animateRef = useRef(null)

	// const handlePlayPauseToggle = () => {
	// 	if (isPlaying) {
	// 		videoRef.current.pause()
	// 	} else {
	// 		videoRef.current.play()
	// 	}
	// 	setIsPlaying(!isPlaying)
	// }

	// useGSAP(
	// 	() => {
	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: ".playOnEnter",
	// 				start: "20% 50%",
	// 				end: "20% 50%",
	// 				// markers: true,
	// 				onEnter: () => {
	// 					handlePlayPauseToggle()
	// 				},
	// 			},
	// 		})
	// 	},
	// 	{scope: animateRef},
	// )

	return (
		<>
			{/* <SubProjectOne animateRef={animateRef} videoRef={videoRef} videoURL={videoURL} handlePlayPauseToggle={handlePlayPauseToggle} isPlaying={isPlaying}/> */}
			<main className="m-auto max-w-[1440px] px-[20px] flex flex-col text-white">
				<section className="md:mx-[7%] gap-10 md:items-center flex flex-col">
					<h1 className="mt-12 md:mt-32 md:w-[48rem] font-semibold text-4xl md:text-7xl md:text-center">
						The world’s most advanced display.
					</h1>
					<Video/>
					<p className="md:w-[35rem] md:text-center md:text-lg md:leading-7 text-zinc-500 ">
						The new Ultra Retina XDR display introduces groundbreaking tandem OLED
						technology. Extreme brightness, incredibly precise contrast and advanced
						technologies like ProMotion and True Tone give you a{" "}
						<span className="text-white">jaw-dropping visual experience</span>. And
						you can use Reference Mode for colour-accurate workflows.
					</p>
					<div className="sticky text-sm flex items-center m-auto gap-2 mt-5 bottom-10 px-4 py-2 rounded-full bg-[rgba(63,63,70,0.2)] backdrop-blur-lg">
						<span>Immerse yourself in Ultra Retina XDR </span>
					</div>
				</section>
			</main>
		</>
	)
}
