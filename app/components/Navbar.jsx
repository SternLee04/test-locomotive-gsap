"use client"
import Image from 'next/image'; // Import the Image component
import DownarrowImage from '@/public/downArrow.svg'; // Ensure this path is correct
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Navbar() {

    const navRef = useRef(null);


    return (
        <nav ref={navRef}>
        <div className="mt-3 fixed z-10 bg-transparent flex w-full text-white">
            <button className="lg:ml-60 bg-transparent backdrop-blur-lg flex items-center justify-center space-x-2 p-3 rounded-xl">
                <span className="text-sm tracking-wider"> {/* Changed to tracking-wider for example */}
                    Folio
                </span>
                <Image 
                        src={DownarrowImage}
                        alt="down arrow image"
                        width={15} // Specify width
                        height={20} // Specify height
                    />
            </button>
        </div>
        </nav>
    );
}
