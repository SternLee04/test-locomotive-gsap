"use client"
import { useState } from "react";

function Button() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    window.open("mailto:jayvadalia04@gmail.com");}}
                className={`font-lg gap-3 flex items-center justify-center cursor-none mt-5 px-7 py-5 border border-zinc-300 rounded-full transition-colors duration-300 ease-linear ${isHovered ? 'bg-white text-black' : 'bg-transparent text-white'}`}
            >
                Say hi
            </button>
        </>
    );
}

export default Button;
