interface EventCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

export function EventCard({ title, description, date, image }: EventCardProps) {
  return (
    <div className="w-[270px] h-[368px] glassmorphism rounded-[22px] flex flex-col">
      {/* Image Section */}
      <div className="h-[174px] p-[10px] pb-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[160px] object-cover rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 px-[15px] flex flex-col">
        {/* Title */}
        <div className="py-2">
          <h3 className="text-white font-montserrat text-[22px] font-medium leading-[127.778%]">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="py-2 flex-1">
          <p className="text-white/68 font-montserrat text-sm leading-[127.778%] w-[238px]">
            {description}
          </p>
        </div>

        {/* Date */}
        <div className="py-2">
          <p className="text-white font-montserrat text-xs leading-[127.778%]">
            {date}
          </p>
        </div>

        {/* View Details Button */}
        <div className="mt-auto mb-4">
          <button className="w-full border border-chainalchemy-cyan rounded-b-3xl px-[15px] py-[10px] flex items-center justify-center gap-2 hover:bg-chainalchemy-cyan/10 transition-colors">
            <span className="text-white font-jakarta text-sm leading-[127.778%]">
              View event details
            </span>
            <svg width="18" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 8V9H18V8V7H0V8Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
