export function HeroSection() {
  return (
    <section className="px-4 lg:px-[151px] py-20">
      {/* Featured Event Card */}
      <div className="relative w-full max-w-[1138px] h-[298px] mx-auto bg-chainalchemy-gray rounded-lg overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/da301192982771c76a82ced12b272c2f0efb28d8?width=2250" 
          alt="Inauguration Event" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'left -52px top -422px' }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) -32.15%, #000 95.83%)'
          }}
        />
        
        {/* Content */}
        <div className="absolute right-8 lg:right-[72px] top-[55px] w-[238px]">
          <div className="space-y-[18px]">
            <h2 className="text-white font-montserrat text-[22px] font-medium leading-[127.778%]">
              Inauguration
            </h2>
            <p className="text-white/68 font-montserrat text-sm leading-[127.778%]">
              In publishing and graphic design, Lorem ipsum is a placeholder.
            </p>
            <p className="text-white font-montserrat text-xs leading-[127.778%]">
              23rd July 2024
            </p>
          </div>
        </div>

        {/* View Event Details Button */}
        <div className="absolute right-8 lg:right-[72px] bottom-[96px] flex items-center gap-2">
          <span className="text-white font-jakarta text-sm leading-[127.778%]">
            View event details
          </span>
          <svg width="18" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 8V9H18V8V7H0V8Z" fill="white"/>
          </svg>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-[21px] left-1/2 transform -translate-x-1/2 flex items-center gap-[10px]">
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}
