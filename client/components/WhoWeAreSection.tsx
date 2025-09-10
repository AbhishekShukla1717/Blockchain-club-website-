import React from 'react';

export function WhoWeAreSection() {
  return (
    <section className="relative py-20 bg-chainalchemy-dark overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="w-[1477px] h-[726px] bg-gradient-to-r from-black via-black/0 to-black/0 transform rotate-[1.829deg] absolute left-[17px] top-[499px]"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/63cedf5290b826fd341651f812d3d043a71ab0f5?width=2880"
          alt="Background"
          className="absolute w-full h-[501px] bottom-0 left-0 object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-white font-montserrat text-4xl font-medium">
              Who We Are
            </h2>
            
            <p className="text-white/68 font-montserrat text-lg leading-relaxed">
              We are a passionate community of students exploring the infinite potential of blockchain technology through collaborative learning, hands-on projects, and real-world innovation. Together, we're building the foundation for a more decentralized future.
            </p>
            
            <button className="glassmorphism px-8 py-3 rounded-lg text-white font-montserrat text-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>

          {/* Figure image */}
          <div className="flex justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/126936cef26507caa286faa95c630323722a805a?width=1214"
              alt="Person in hoodie"
              className="w-[607px] h-[326px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
