import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/logo.svg';
import orangeText from '../../assets/orange1.svg';
import AnimatedButton from '../ui/AnimatedButton';
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
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
            <div className="h-10 w-10 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Orangecut Media Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-8 w-28 flex items-center justify-center -ml-2 mt-3 ml-2.4">
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
          <div className="relative z-[70]">
            <a 
              href="/" 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="h-10 w-10 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Orangecut Media Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="h-8 w-28 flex items-center justify-center -ml-2 mt-3 ml-6">
                <img 
                  src={orangeText} 
                  alt="Orangecut Media" 
                  className="h-full w-full object-contain" 
                />
              </div>
            </a>
          </div>
          <MobileNavToggle isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-base font-medium text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <AnimatedButton href="/contact" className="mt-4">
            Get Started
          </AnimatedButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;