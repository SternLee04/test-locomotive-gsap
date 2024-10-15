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
	
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])

	return (
		<>
			<ProjectOne />
		</>
	)
}
