import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-chainalchemy-card px-4 lg:px-[151px] py-[18px] border-b border-chainalchemy-cyan">
      <div className="flex items-center justify-between">
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-[10px] py-[10px] text-lg font-montserrat transition-colors ${
                  isActive
                    ? "text-chainalchemy-cyan border-b border-chainalchemy-cyan"
                    : "text-white hover:text-chainalchemy-cyan"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
