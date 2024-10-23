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
                className={`font-lg flex items-center justify-center cursor-none mt-5 px-7 py-5 rounded-full transition-all duration-300 ease-linear 
                ${isHovered ? 'bg-white border-2 scale-110 text-black' : 'border-2 border-zinc-200 text-white'}`}
            >
                Say hi
            </button>
        </>
    );
}

export default Button;
