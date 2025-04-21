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

    
    const floatingImages = [
        {
            src: "https://i.pinimg.com/474x/24/cd/ae/24cdae78242260e2150920a3537ea115.jpg",
            alt: "Fashion",
            position: "top-left",
            color: "from-purple-500 to-pink-500",
            size: "w-44 h-56",
            rotate: "-rotate-6"
        },
        {
            src: "https://i.pinimg.com/474x/95/ec/4c/95ec4c53c5f78c71f58e7333c3f904f4.jpg",
            alt: "Electronics",
            position: "bottom-right",
            color: "from-amber-500 to-orange-500",
            size: "w-48 h-64",
            rotate: "rotate-8"
        },
        {
            src: "https://i.pinimg.com/474x/ed/5e/5c/ed5e5c4aca1fdc2ea643013b8d8b243b.jpg",
            alt: "Home",
            position: "top-right",
            color: "from-pink-500 to-rose-500",
            size: "w-40 h-52",
            rotate: "rotate-12"
        },
        {
            src: "https://i.pinimg.com/474x/c5/a9/69/c5a969feaf453f229fc0b7e2e7f0f0be.jpg",
            alt: "Accessories",
            position: "bottom-left",
            color: "from-blue-500 to-cyan-500",
            size: "w-36 h-48",
            rotate: "-rotate-12"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#1B0B07] to-[#2A0F0A] overflow-hidden min-h-screen flex items-center">
            {/* Floating decorative elements */}
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

            <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 relative z-10 w-full">
                {/* Text Content */}
                <div className="flex flex-col justify-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold font-['Titan_One'] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        <span className="block">Crafted Elegance,</span>
                        <span className="block">Everyday Confidence</span>
                        <span className="block">in Every Choice</span>
                    </h1>
                    <p className="text-xl text-[#d9c7c2] font-['Yatra_One'] max-w-lg">
                        Discover curated fashion, tech, and lifestyle essentials designed to elevate your daily experience and make every moment memorable.
                    </p>
                    <div className="flex space-x-6">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Shop Now
                        </button>
                        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300">
                            View Lookbook
                        </button>
                    </div>
                </div>

                {/* Visual Elements Container */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                    {/* Central Video with Floating Effect */}
                    <div className="relative w-full max-w-md h-[480px] overflow-hidden rounded-[40px] z-20 group animate-float">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-[40px] blur-lg scale-105 group-hover:scale-110 transition-all duration-700"></div>
                        <video
                            src="https://videos.pexels.com/video-files/9146515/9146515-uhd_1440_2560_30fps.mp4"
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-[32px] relative z-10 border-4 border-white/20 group-hover:border-white/40 transition-all duration-500"
                        />
                        <button 
                            onClick={togglePlay}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-20 group-hover:opacity-100 opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>

                    {/* Premium Floating Product Images */}
                    {floatingImages.map((image, index) => (
                        <div 
                            key={index}
                            className={`absolute ${image.position === 'top-left' ? '-top-8 -left-8' : 
                                       image.position === 'bottom-right' ? '-bottom-8 -right-8' :
                                       image.position === 'top-right' ? '-top-12 right-0' : 
                                       '-bottom-12 -left-12'} 
                                    ${image.size} transform ${image.rotate} z-30 transition-all duration-700 hover:rotate-0 hover:z-40 hover:scale-105 hover:shadow-2xl`}
                        >
                            <div className={`relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/20 group transition-all duration-500 hover:border-white/50`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10`}></div>
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Label */}
                                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full z-20">
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">{image.alt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </section>
    );
};

export default Hero;