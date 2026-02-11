import { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Toggle } from './Toggle';
import { Theme } from 'types';

const Nav = styled(motion.nav) <{ $theme: Theme; $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ $isScrolled, $theme }) =>
    $isScrolled ? `${$theme.key === 'dark' ? 'rgba(10, 14, 39, 0.9)' : 'rgba(248, 250, 252, 0.9)'}` : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(12px)' : 'none')};
  border-bottom: ${({ $isScrolled, $theme }) =>
    $isScrolled ? `2px solid ${$theme.tertiaryTextColor}33` : 'none'};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (max-width: 820px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div<{ $theme: Theme }>`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ $theme }) => $theme.primaryTextColor};
  cursor: pointer;
  letter-spacing: -1px;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }

  span {
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #3b82f6;

    &::after {
      width: 100%;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileToggleWrapper = styled.div`
  display: none;
  
  @media (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`;

const MenuButton = styled.div<{ $isOpen: boolean; $theme: Theme }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  @media (max-width: 820px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ $theme }) => $theme.primaryTextColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const MobileMenu = styled(motion.div) <{ $theme: Theme }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${({ $theme }) => $theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 100;
`;

export const Navbar = () => {
  const { theme } = useContext(AppContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing beyond mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const linkVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  return (
    <>
      <Nav
        $theme={theme}
        $isScrolled={isScrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo $theme={theme} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Emad<span> Ahmed</span>
        </Logo>
        <Actions>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} $theme={theme}>
                {item.name}
              </NavLink>
            ))}
          </NavLinks>
          <MobileToggleWrapper>
            <Toggle inline={true} />
          </MobileToggleWrapper>
          <MenuButton $isOpen={isOpen} $theme={theme} onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </MenuButton>
        </Actions>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            $theme={theme}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={linkVariants}>
                <NavLink
                  href={item.href}
                  $theme={theme}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};
