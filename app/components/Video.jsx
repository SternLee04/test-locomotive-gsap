/** @format */
"use client"

import {useEffect, useState, useRef} from "react"

function Video() {
	const videoRef = useRef(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const [needRestart, setNeedRestart] = useState(false)

	useEffect(() => {
		if (isPlaying) {
			const handleEnded = () => {
				console.log("Video has ended")
				setNeedRestart(true)
			}

			// Add event listener
			videoRef.current.addEventListener("ended", handleEnded)
			return () => {
				// Remove event listener
				videoRef.current.removeEventListener("ended", handleEnded)
			}
		}
	}, [isPlaying])

	const handlePlayPause = () => {
		if (videoRef.current.paused) {
			videoRef.current.play()
			setIsPlaying(true)
		} else {
			videoRef.current.pause()
			setIsPlaying(false)
		}
	}

	return (
		<div className="flex w-full flex-col items-center overflow-hidden">
			<div
				onClick={handlePlayPause}
				className={`transition-all duration-300 ease-linear ${
					isPlaying ? "brightness-100" : "brightness-50"
				}`}>
				<video
					ref={videoRef}
					className="w-full scale-110"
					muted>
					<source
						src="/NikeWebsite.mp4"
						type="video/mp4"
					/>
					<source
						src="video.webm"
						type="video/webm"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	)
}

export default Video
