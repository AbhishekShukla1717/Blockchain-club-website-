import React from 'react';

export function ContactSection() {
  return (
    <section className="relative h-[501px] bg-gradient-to-r from-black via-[#031F2E] to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Decorative cubes */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/76dd2d41c1a506876073f72d23a2b19f8d59689d?width=644"
          alt=""
          className="absolute w-[322px] h-[229px] top-[145px] right-[128px] transform rotate-[174.677deg]"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/190527346ecf67db7d201197833d3526ce3ee89c?width=644"
          alt=""
          className="absolute w-[322px] h-[229px] top-[224px] left-[763px]"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6dcef77f2f7dc5979b5ee04e13b89171f4648bb0?width=644"
          alt=""
          className="absolute w-[322px] h-[229px] -top-[14px] left-[805px] transform rotate-[174.677deg]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* 3D Graphic */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d4c63cf17cbb50af734687fea5c0f3537d3f3659?width=884"
              alt="3D Contact Graphic"
              className="w-[300px] h-[330px] md:w-[400px] md:h-[440px] lg:w-[442px] lg:h-[484px] object-contain drop-shadow-[-15px_23px_62.8px_rgba(0,0,0,0.61)]"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-white font-montserrat text-2xl md:text-[28px] font-medium leading-[35.778px]">
              Contact us
            </h2>

            <p className="text-white/68 font-montserrat text-base md:text-lg leading-[23px] max-w-[526px] mx-auto lg:mx-0">
              Got a question, idea, or just curious about what we do? Reach out — we're always excited to connect, collaborate, and help you get started with blockchain.
            </p>

            <button className="glassmorphism px-8 md:px-10 py-3 md:py-4 rounded-full text-white font-montserrat text-base md:text-lg hover:bg-white/10 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
