/** @format */

"use client"
import React, {useRef, useEffect} from "react"
import Intro from "./Intro"
import Hero from "@/app/components/Hero"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import Dummy from "./Dummy"
import ProjectOne from "./ProjectOne"

export default function App() {

	const mycursor = useRef()
	const itr = useRef()
	const appTl = useRef()
	

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			gsap.to(".customcursor", {
				x: e.x,
				y: e.y,
				duration: 0.25,
				display: "flex",
				ease: "back.inout",
			})
		})
	}, [mycursor])

	useGSAP(
		() => {
			appTl.current = gsap.timeline()
			appTl.current
				.to(".animate", {
					y: "-100%",
					delay: 1,
					duration: 2,
					ease: "power2.inOut",
				})
		},
		{scope: itr},
	)

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])

	return (
		<>
			<div
				ref={mycursor}
				className="z-20 w-7 h-7 rounded-full bg-[#ffffff68] customcursor fixed hidden"></div>
			<main ref={itr}>
				<div className="animate z-20 fixed">
						<Intro />
				</div>
			</main>
			<Hero />
			<ProjectOne />
		</>
	)
}
