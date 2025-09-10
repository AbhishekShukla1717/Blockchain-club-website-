import React from 'react';

export function HomeHero() {
  return (
    <section className="relative min-h-screen bg-chainalchemy-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Glowing orb background */}
        <div className="absolute w-[1440px] h-[1448px] top-[198px] left-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9b4550415ee7e9355a4f23a100fbfb5f91b22a7f?width=2880" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative cubes */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/190527346ecf67db7d201197833d3526ce3ee89c?width=644"
          alt=""
          className="absolute w-[322px] h-[229px] top-[108px] left-[423px]"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/bf77a029bda842ffb68dd0940806797d8295e529?width=662"
          alt=""
          className="absolute w-[331px] h-[235px] top-[126px] left-[67px]"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/190527346ecf67db7d201197833d3526ce3ee89c?width=644"
          alt=""
          className="absolute w-[322px] h-[229px] top-[220px] left-[1095px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main heading */}
        <h1 className="text-white font-audiowide text-3xl md:text-4xl lg:text-[54px] font-normal leading-normal mb-8 max-w-[770px]">
          Empowering the Future with Blockchain
        </h1>

        {/* Subtitle */}
        <p className="text-white/68 font-montserrat text-base md:text-lg font-normal leading-[25px] mb-12 max-w-[982px] px-4">
          Join a growing community of student innovators exploring blockchain through hands-on projects, peer learning, and real-world applications. Learn, build, and lead the decentralized future
        </p>

        {/* CTA Button */}
        <button className="glassmorphism px-8 md:px-10 py-4 md:py-5 rounded-full text-white font-montserrat text-base md:text-lg font-normal leading-[29.714px] tracking-[-0.186px] hover:bg-white/10 transition-colors">
          Become a Member
        </button>
      </div>
    </section>
  );
}
