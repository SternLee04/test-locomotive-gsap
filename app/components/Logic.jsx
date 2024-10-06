'use client'
import {useEffect} from 'react'
import Dummy from './Dummy'

export default function Logic() {

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <>
            <Dummy />
        </>
    )
}