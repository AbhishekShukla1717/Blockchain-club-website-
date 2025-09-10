import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamMemberCard({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="w-[270px] h-[411px] relative">
      {/* Glassmorphism container */}
      <div className="w-full h-full rounded-3xl border-2 border-chainalchemy-cyan bg-white/[0.03] backdrop-blur-sm relative overflow-hidden">
        <div className="w-full h-full rounded-3xl bg-white/[0.03] shadow-[2px_2px_2px_0_rgba(255,255,255,0.24)_inset,-2px_-2px_2px_-1px_rgba(255,255,255,0.24)_inset]">
          
          {/* Profile image circle */}
          <div className="absolute -left-[41px] -top-[89px] w-[353px] h-[310px]">
            <div className="w-full h-full rounded-full bg-white/[0.03] shadow-[2px_2px_2px_0_rgba(255,255,255,0.24)_inset,-2px_-2px_2px_-1px_rgba(255,255,255,0.24)_inset] overflow-hidden">
              <img 
                src={image}
                alt={name}
                className="absolute left-[47px] top-[106px] w-[263px] h-[244px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Name and role */}
            <div className="text-center mb-4">
              <h3 className="text-white font-montserrat text-lg font-normal leading-[29.714px] tracking-[-0.186px] mb-1">
                {name}
              </h3>
              <p className="text-[#50FFE2] font-montserrat text-sm font-normal leading-[29.714px] tracking-[-0.186px]">
                {role}
              </p>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-1 mb-6">
              <div className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-black" />
              </div>
              <div className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center">
                <Instagram className="w-4 h-4 text-black" />
              </div>
              <div className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">B</span>
                </div>
              </div>
              <div className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center">
                <Github className="w-4 h-4 text-black" />
              </div>
            </div>

            {/* Description */}
            <p className="text-white/68 font-jakarta text-sm leading-[17.889px] text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Aariya Kumari",
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9e5e1f849ae8abaa37ffe311d38f55d71b1c45cc?width=526",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d00e5aa7aba129acd7857c634cdb745b458e7ab8?width=402",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ad0f6b26a713342cda91c5d7eaf21dcf6804b11?width=458",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari", 
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8ac3118f8781ebe481e42ac4494caf95e77487e1?width=470",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9e5e1f849ae8abaa37ffe311d38f55d71b1c45cc?width=526",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d00e5aa7aba129acd7857c634cdb745b458e7ab8?width=402",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ad0f6b26a713342cda91c5d7eaf21dcf6804b11?width=458",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
      name: "Aariya Kumari",
      role: "President", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8ac3118f8781ebe481e42ac4494caf95e77487e1?width=470",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    }
  ];

  return (
    <section className="relative py-20 bg-chainalchemy-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/89c7c67c24b948626417d655c958414fac03ce9d?width=4114"
          alt=""
          className="w-[2057px] h-[1170px] object-cover absolute -left-[372px] top-[2421px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-montserrat text-2xl md:text-[28px] font-medium leading-[35.778px] mb-4">
            Team Members
          </h2>
          <p className="text-white/68 font-montserrat text-base md:text-lg leading-[23px]">
            Driven by innovation, united by purpose.
          </p>
        </div>

        {/* Team grid - First row */}
        <div className="flex justify-center gap-4 lg:gap-[57px] mb-12 overflow-x-auto pb-4">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="flex-shrink-0">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>

        {/* Team grid - Second row */}
        <div className="flex justify-center gap-4 lg:gap-[57px] mb-16 overflow-x-auto pb-4">
          {teamMembers.slice(4, 8).map((member, index) => (
            <div key={index + 4} className="flex-shrink-0">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>

        {/* See all members button */}
        <div className="flex justify-center">
          <button className="glassmorphism px-10 py-4 rounded-full text-white font-montserrat text-lg hover:bg-white/10 transition-colors">
            See all memebers
          </button>
        </div>
      </div>
    </section>
  );
}
