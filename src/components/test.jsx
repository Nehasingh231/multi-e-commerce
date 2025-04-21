import React, { useState, useRef } from 'react';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="relative bg-[#1B0B07] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 relative z-10">
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl text-purple-300 md:text-5xl font-bold font-['Titan_One'] leading-tight mb-6">
                        Crafted Elegance,<br />
                        Everyday Confidence<br />
                        in Every Choice
                    </h1>
                    <p className="mb-6 font-['Yatra_One'] text-lg text-[#c9bcb7]">
                        Explore a world of curated fashion, tech, and lifestyle essentials — handpicked to elevate your
                        personality and transform daily moments into lasting impressions.
                    </p>
                    <button className="bg-black font-['Titan_One'] text-white px-6 py-3 rounded-full w-fit hover:bg-gray-700 transition">
                        View Collection
                    </button>
                </div>

                {/* Visual Elements Container */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                    {/* Central Video with Glow Effect */}
                    <div className="relative w-[320px] h-[420px] overflow-hidden rounded-3xl z-20 group">
                        <div className="absolute inset-0 bg-purple-300/20 rounded-3xl blur-md scale-105 group-hover:scale-110 transition-all duration-500"></div>
                        <video
                            src="https://videos.pexels.com/video-files/8995391/8995391-sd_360_640_25fps.mp4"
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-2xl relative z-10 border-4 border-white"
                        />
                        <button 
                            onClick={togglePlay}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>

                    {/* Floating Product Images - More Dynamic Layout */}
                    <div className="absolute -top-8 left-0 w-40 h-52 transform -rotate-6 z-30 transition-all duration-300 hover:rotate-0 hover:z-40 hover:scale-110 hover:shadow-xl">
                        <img
                            src="https://i.pinimg.com/474x/5d/4c/67/5d4c670ec4f937c86a0be7c22d487629.jpg"
                            alt="Fashion"
                            className="w-full h-full rounded-xl shadow-lg border-4 border-white object-cover"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-purple-300 w-6 h-6 rounded-full"></div>
                    </div>

                    <div className="absolute -bottom-6 right-0 w-44 h-60 transform rotate-8 z-30 transition-all duration-300 hover:rotate-0 hover:z-40 hover:scale-110 hover:shadow-xl">
                        <img
                            src="https://i.pinimg.com/474x/6a/0b/2b/6a0b2b9e1afc4bae05815619348bc91d.jpg"
                            alt="Electronics"
                            className="w-full h-full rounded-xl shadow-lg border-4 border-white object-cover"
                        />
                        <div className="absolute -top-3 -left-3 bg-yellow-300 w-6 h-6 rounded-full"></div>
                    </div>

                    <div className="absolute top-12 -right-12 w-36 h-48 transform rotate-12 z-20 transition-all duration-300 hover:rotate-0 hover:z-40 hover:scale-110 hover:shadow-xl">
                        <img
                            src="https://i.pinimg.com/474x/b6/e0/f1/b6e0f1c0f63d2871d10dab58acb3883b.jpg"
                            alt="Home"
                            className="w-full h-full rounded-xl shadow-lg border-4 border-white object-cover"
                        />
                        <div className="absolute -bottom-2 -left-2 bg-pink-300 w-5 h-5 rounded-full"></div>
                    </div>

                    <div className="absolute bottom-16 -left-12 w-32 h-44 transform -rotate-12 z-20 transition-all duration-300 hover:rotate-0 hover:z-40 hover:scale-110 hover:shadow-xl">
                        <img
                            src="https://i.pinimg.com/474x/fe/e9/83/fee9836592216654f4c3799d7ba9f978.jpg"
                            alt="Accessories"
                            className="w-full h-full rounded-xl shadow-lg border-4 border-white object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-blue-300 w-5 h-5 rounded-full"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-purple-300/20 blur-xl z-10"></div>
                    <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-yellow-300/20 blur-xl z-10"></div>
                </div>
            </div>

            {/* Floating particles/dots background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;