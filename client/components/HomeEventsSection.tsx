import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

function EventCard({ title, description, date, image }: EventCardProps) {
  return (
    <div className="glassmorphism rounded-[22px] w-[270px] h-[368px] flex flex-col">
      {/* Image */}
      <div className="p-[10px] pb-0">
        <img 
          src={image}
          alt={title}
          className="w-full h-[160px] rounded-2xl object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 px-[15px] py-4 flex flex-col">
        <h3 className="text-white font-montserrat text-[22px] font-medium leading-[28.111px] mb-2">
          {title}
        </h3>
        
        <p className="text-white/68 font-montserrat text-sm leading-[17.889px] mb-4 flex-1">
          {description}
        </p>
        
        <p className="text-white font-montserrat text-xs leading-[15.333px] mb-4 text-center">
          {date}
        </p>
        
        {/* Button */}
        <button className="w-full border border-chainalchemy-cyan rounded-b-xl px-4 py-3 flex items-center justify-center gap-2 text-white font-jakarta text-sm hover:bg-chainalchemy-cyan/10 transition-colors">
          View event details
          <ArrowRight className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}

export function HomeEventsSection() {
  const events = [
    {
      title: "Inauguration",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder.",
      date: "23rd July 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ca644d44b542fc72c36a14a2e99972a65b2a42d2?width=500"
    },
    {
      title: "Inauguration",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder.",
      date: "23rd July 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ca644d44b542fc72c36a14a2e99972a65b2a42d2?width=500"
    },
    {
      title: "Inauguration",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder.",
      date: "23rd July 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ca644d44b542fc72c36a14a2e99972a65b2a42d2?width=500"
    },
    {
      title: "Inauguration",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder.",
      date: "23rd July 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ca644d44b542fc72c36a14a2e99972a65b2a42d2?width=500"
    }
  ];

  return (
    <section className="relative py-20 bg-[#090808] overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0">
        {/* Pink blur */}
        <div className="absolute w-[315px] h-[268px] rounded-full bg-[#E200B1] blur-[250px] top-[208px] right-[48px]"></div>
        {/* Blue blur */}
        <div className="absolute w-[315px] h-[268px] rounded-full bg-[#0084E2] blur-[250px] bottom-[117px] left-[-77px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-montserrat text-2xl md:text-[28px] font-medium leading-[35.778px] mb-4">
            Events
          </h2>
          <p className="text-white/68 font-montserrat text-base md:text-lg leading-[23px] max-w-[728px] mx-auto px-4">
            Where knowledge meets action — workshops, webinars, and real-world building.
          </p>
        </div>

        {/* Events Grid */}
        <div className="flex justify-center gap-4 lg:gap-5 mb-12 overflow-x-auto pb-4">
          {events.map((event, index) => (
            <div key={index} className="flex-shrink-0">
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="glassmorphism px-10 py-4 rounded-full text-white font-montserrat text-lg hover:bg-white/10 transition-colors">
            View all Event
          </button>
        </div>
      </div>
    </section>
  );
}
