import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import orangeText from '../../assets/orange1.svg';
import AnimatedButton from '../ui/AnimatedButton';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '../ui/navbar-resize';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Showcase', link: '/showcase' },
    { name: 'FAQ\'s', link: '/faq' },
    { name: 'Reviews', link: '/reviews' },
  ];

  return (
    <Navbar>
      <NavBody>
        <div className="relative z-[70]">
          <a 
            href="/" 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="h-8 w-8 flex items-center justify-center -mt-1 md:mt-0 md:h-10 md:w-10">
              <img 
                src={logo} 
                alt="Orangecut Media Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-6 w-20 flex items-center justify-center md:h-8 md:w-28 ml-[-7px] mt-3">
              <img 
                src={orangeText} 
                alt="Orangecut Media" 
                className="h-full w-full object-contain" 
              />
            </div>
          </a>
        </div>
        
        <NavItems items={navItems} />
        
        <AnimatedButton href="/contact">
          Get Started
        </AnimatedButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <div className="flex w-full justify-between items-center">
            <div className="relative z-[70]">
              <a 
                href="/" 
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ pointerEvents: 'auto' }}
              >
                <div className="h-7 w-7 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Orangecut Media Logo" 
                    className="h-full w-full object-contain" 
                  />
                </div>
                <div className="h-6 w-20 flex items-center justify-center mt-1">
                  <img 
                    src={orangeText} 
                    alt="Orangecut Media" 
                    className="h-full w-full object-contain" 
                  />
                </div>
              </a>
            </div>
            <div>
              <MobileNavToggle isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className="flex flex-col space-y-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-sm font-medium text-white hover:text-orange-400 transition-colors px-4 py-1.5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-1">
              <AnimatedButton href="/contact" className="text-sm py-1.5">
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;