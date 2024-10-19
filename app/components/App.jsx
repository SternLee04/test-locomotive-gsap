/** @format */

"use client"
import React, {useRef, useEffect} from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import ProjectOne from "./ProjectOne"
import BentoGrid from "./BentoGrid"

export default function App() {
	const projectOneContianer = useRef(null)

	useGSAP(() => {

	}, {scope: projectOneContianer})
	
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])

	return (
		<>
			<BentoGrid />
			<ProjectOne Ref={projectOneContianer} />
		</>
	)
}
