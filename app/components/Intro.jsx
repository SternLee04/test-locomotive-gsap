import React from "react"
export default function Hero() {
	return (
		<div className="h-screen w-screen bg-black flex flex-col justify-center items-start text-white px-6 lg:px-60">
            {/* <h1>last login : {date.getFullYear()}</h1> */}
            <h1 className="text-2xl text-zinc-800 md:text-5xl font-semibold">
                <span className=" mr-1.5">W</span>
                <span className=" mr-1.5">e</span>
                <span className=" mr-1.5">l</span>
                <span className=" mr-1.5">l</span>
                <span className=" mr-1.5">c</span>
                <span className=" mr-1.5">o</span>
                <span className=" mr-1.5">m</span>
                <span className=" mr-1.5">e</span>

            </h1>
            {/* <h3 className="text-transparent text-lg">Server Running on port: 
                <span className="text-transparent text-8xl">5</span>
                <span className="text-transparent text-8xl">1</span>
                <span className="text-transparent text-8xl">7</span>
                <span className="text-transparent text-8xl">3</span>
            </h3> */}
		</div>
	)
}
