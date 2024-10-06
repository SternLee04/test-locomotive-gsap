export default function SubProjectOne({animateRef, videoRef, videoURL, handlePlayPauseToggle, isPlaying}) {
	return (
		<main className=" m-auto max-w-[1440px] px-[20px] flex flex-col items-center text-white">
				<section className="md:mx-[7%] gap-5 md:items-center flex flex-col">
					<h1 className="mt-[10rem] md:w-[40rem] w-96 text-2-5xl font-semibold md:text-7xl md:text-center">
						The world’s most advanced display.
					</h1>
					<div
						ref={animateRef}
						className="flex flex-col items-center">
						<video
							ref={videoRef}
							className="playOnEnter w-full my-10"
							muted>
							<source
								src={videoURL}
								type="video/mp4"
							/>
							<source
								src="video.webm"
								type="video/webm"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="md:mt-5">
						<p className="md:w-[35rem] w-[20rem] md:text-center md:text-lg md:leading-7 text-zinc-500 ">
							The new Ultra Retina XDR display introduces groundbreaking tandem OLED
							technology. Extreme brightness, incredibly precise contrast and advanced
							technologies like ProMotion and True Tone give you a{" "}
							<span className="text-white">jaw-dropping visual experience</span>. And
							you can use Reference Mode for colour-accurate workflows.
						</p>
					</div>
					<div className="sticky text-sm flex items-center m-auto gap-2 mt-5 bottom-10 px-4 py-2 rounded-full bg-[rgba(63,63,70,0.2)] backdrop-blur-lg">
						<span>Immerse yourself in Ultra Retina XDR </span>
						<button onClick={handlePlayPauseToggle}>
							{isPlaying ? (
								<img
									src="/fad4.svg"
									
									className="h-10 w-10"></img>
							) : (
								<img
									src="/fad3.svg"
									className="h-10 w-10"></img>
							)}
						</button>
					</div>
				</section>
			</main>
	)
}
