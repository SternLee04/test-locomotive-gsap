/** @format */
"use client"

import { useEffect, useState, useRef } from "react";

function Video() {
	const videoRef = useRef(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [needRestart, setNeedRestart] = useState(false);

	useEffect(() => {
		const handleEnded = () => {
			console.log('Video has ended');
			setNeedRestart(true);
		};

		// Add event listener
		videoRef.current.addEventListener('ended', handleEnded);
		return () => {
			// Remove event listener
			videoRef.current.removeEventListener('ended', handleEnded);
		};
	}, []);

	const handlePlayPause = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<div 
				onClick={handlePlayPause}
				className={`transition-all duration-300 ease-linear ${isPlaying ? 'brightness-100' : 'brightness-50'}`}
			>
				<video
					ref={videoRef}
					className="w-full scale-110 md:my-10"
					muted
				>
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
	);
}

export default Video;
