"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-6">
            <div className="col-span-7 place-self-center">
                <section id="about">
                    <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hello I\'m Javin',
                                1000,
                                'Hello I\'m Javin 👋'
                            ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    I'm currently a student at <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-dustyGold-200 to-dustyGold-50" >Georgia Institute of Technology</span> studying
                    Computer Science. 
                    </p>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        I'm using my education to my advantage to learn the most that I can in computer science and programming.
                        I have experience in <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-700 via-green-500 to-purple-950">Java, Python, Node.js, React, HTML/CSS, C#, and C.</span>
                    </p>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        I have also taken opportunities to learn Git, Azure, Visual Studio, Android Studio, and RedisDB.
                    </p>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        I am always open to learning and always looking for opportunities.
                    </p>
                </section>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt:0">
                <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                    <Image
                        src="/images/profilepic.jpg"
                        alt="hero image"
                        className="rounded-2xl border-solid border-4 border-white absolute"
                        width={250}
                        height={250}
                    />
                </div>
                
            </div>
            
        </div>
        
    );

};

export default HeroSection;