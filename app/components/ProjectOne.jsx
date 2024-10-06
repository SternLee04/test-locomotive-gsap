/** @format */

"use client"

import React, {useRef, useState} from "react"
import videoURL from "../../public/NikeWebsite.mp4"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import SubProjectOne from "./SubProjectOne.jsx"

export default function ProjectOne() {
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const animateRef = useRef(null)

	const handlePlayPauseToggle = () => {
		if (isPlaying) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}

	useGSAP(
		() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".playOnEnter",
					start: "20% 50%",
					end: "20% 50%",
					// markers: true,
					onEnter: () => {
						handlePlayPauseToggle()
					},
				},
			})
		},
		{scope: animateRef},
	)

	return (
		<>
			{/* <div className="h-[100vh]"></div> */}
				<SubProjectOne animateRef={animateRef} videoRef={videoRef} videoURL={videoURL} handlePlayPauseToggle={handlePlayPauseToggle} isPlaying={isPlaying}/>
			{/* <div className="h-[100vh]"></div> */}
		</>
	)
}
