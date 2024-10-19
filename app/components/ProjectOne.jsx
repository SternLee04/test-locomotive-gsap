/** @format */

// import React, {useRef, useState} from "react"
// import gsap from "gsap"
// import {useGSAP} from "@gsap/react"
// import SubProjectOne from "./SubProjectOne.jsx"
import Video from "./Video.jsx"

export default function ProjectOne({Ref}) {
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
			<main ref={Ref} className="m-auto max-w-[1440px] px-[20px] flex flex-col text-white overflow-hidden">
				<section className="gap-10 md:items-center flex flex-col">
					<h1 className="mt-12 md:mt-32 md:w-[48rem] font-semibold text-4xl md:text-7xl tracking-wide md:text-center">
						Nike Reimagined Product Page
					</h1>
					<Video />
					<text className="md:w-[40rem] md:text-center md:text-lg tracking-wider text-zinc-500">
						This project is a sleek, interactive{" "}
						<span className="text-white">landing page created with React.js</span>,
						designed to showcase Nike products. It features a responsive layout and a
						component-based architecture, reflecting my skills in front-end
						development.
						<span className="text-white"> Deployed on GitHub Pages</span>, this
						project exemplifies my ability to craft engaging web experiences and
						manage code effectively.
					</text>
					<div
						onClick={() => {
							window.open("https://sternlee04.github.io/nike/")
						}}
						className="sticky scale-75 md:scale-90 md:hover:scale-100 transition-all gap-2 duration-300 cursor-pointer flex items-center tracking-wide justify-center m-auto mt-5 bottom-10 px-4 py-2 rounded-full bg-[rgba(63,63,70,0.2)] backdrop-blur-lg">
						<span>View live project</span>
						<div className="px-3 text-sm py-2 bg-blue-600 rounded-full">􀄯</div>
					</div>
				</section>
			</main>
		</>
	)
}
