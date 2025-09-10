import { Link } from "react-router-dom";

export function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-chainalchemy-card px-4 lg:px-[151px] py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          {/* Left Side - Logo and University Logo */}
          <div className="space-y-8">
            {/* ChainAlchemy Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2b30a81bc6d883b38e8ca414d7d70ac7d9cbead6?width=74" 
                alt="ChainAlchemy Logo" 
                className="w-[37px] h-[42px]"
              />
              <div className="font-audiowide text-lg leading-[127.778%]">
                <span className="text-white">CHAIN</span>
                <span className="text-chainalchemy-cyan">ALCHEMY</span>
              </div>
            </Link>

            {/* University Logo */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/096c30c13105002190fa157d757435ed22345572?width=364" 
              alt="University Logo" 
              className="w-[182px] h-[60px]"
            />
          </div>

          {/* Right Side - Description and CTA */}
          <div className="max-w-[700px] text-center lg:text-left">
            <p className="text-white/68 font-montserrat text-base leading-[25px] mb-8">
              Join a growing community of student innovators exploring blockchain through hands-on projects, peer learning, and real-world applications. Learn, build, and lead the decentralized future
            </p>

            {/* Become a Member Button */}
            <button className="glassmorphism px-10 py-4 rounded-full text-white font-montserrat text-lg leading-[29.714px] tracking-[-0.186px] hover:bg-white/5 transition-colors">
              Become a Member
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-chainalchemy-cyan/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-[10px] py-[10px] text-lg font-gruppo text-white hover:text-chainalchemy-cyan transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
