import { useState } from "react";
import { EventCard } from "./EventCard";

export function EventsGrid() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const years = [2025, 2026, 2027, 2028];

  // Mock event data - in real app this would come from an API
  const events = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: "Inauguration",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder.",
    date: "23rd July 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ca644d44b542fc72c36a14a2e99972a65b2a42d2?width=500",
  }));

  return (
    <section className="px-4 lg:px-[151px] pb-20">
      {/* Year Navigation */}
      <div className="border-b-0.5 border-chainalchemy-cyan pb-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-[10px] py-[10px] font-audiowide text-lg transition-colors ${
                  selectedYear === year
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Sort Icon */}
          <div className="w-[34px] h-[24px]">
            <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3125 25.3438V1.59375M17.625 9.3125L9.3125 1L1 9.3125" stroke="white"/>
              <path d="M26.3125 1V24.75M34.625 17.0312L26.3125 25.3438L18 17.0312" stroke="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {events.slice(0, 4).map((event) => (
            <EventCard
              key={`row1-${event.id}`}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {events.slice(4, 8).map((event) => (
            <EventCard
              key={`row2-${event.id}`}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {events.slice(8, 12).map((event) => (
            <EventCard
              key={`row3-${event.id}`}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {events.slice(12, 16).map((event) => (
            <EventCard
              key={`row4-${event.id}`}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>
      </div>

      {/* Pagination Navigation */}
      <div className="flex items-center justify-center gap-6 mt-16">
        {/* Left Arrow */}
        <button className="text-white/30 hover:text-white transition-colors">
          <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.585787 16.9142C-0.195263 16.1332 -0.195263 14.8668 0.585787 14.0858L13.3137 1.35786C14.0948 0.576816 15.3611 0.576816 16.1421 1.35786C16.9232 2.13891 16.9232 3.40524 16.1421 4.18629L4.82843 15.5L16.1421 26.8137C16.9232 27.5948 16.9232 28.8611 16.1421 29.6421C15.3611 30.4232 14.0948 30.4232 13.3137 29.6421L0.585787 16.9142ZM31 15.5V17.5L2 17.5V15.5V13.5L31 13.5V15.5Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-[10px]">
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
        </div>

        {/* Right Arrow */}
        <button className="text-white hover:text-white/80 transition-colors">
          <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.4142 16.9142C35.1953 16.1332 35.1953 14.8668 34.4142 14.0858L21.6863 1.35786C20.9052 0.576816 19.6389 0.576816 18.8579 1.35786C18.0768 2.13891 18.0768 3.40524 18.8579 4.18629L30.1716 15.5L18.8579 26.8137C18.0768 27.5948 18.0768 28.8611 18.8579 29.6421C19.6389 30.4232 20.9052 30.4232 21.6863 29.6421L34.4142 16.9142ZM4 15.5V17.5L33 17.5V15.5V13.5L4 13.5V15.5Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
