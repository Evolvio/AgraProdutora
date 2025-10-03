'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '../../button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../../navigation-menu';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '../../drawer';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

// AGRA logo component for the navbar
const Logo = () => {
  return (
    <Image
      src="/AGRA - A.png"
      alt="Agra Productora Logo"
      width={32}
      height={32}
      className="object-contain"
    />
  )
}

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface Navbar03NavItem {
  href?: string;
  label: string;
  active?: boolean;
}

export interface Navbar03Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar03NavItem[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar03NavItem[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#', label: 'Features' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'About' },
];

export const Navbar03 = React.forwardRef<HTMLElement, Navbar03Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      signInText,
      signInHref,
      ctaText,
      ctaHref,
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isNavigating, setIsNavigating] = useState(false);
    const [textColor, setTextColor] = useState('text-primary');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isScrolledRef = useRef(false);

    // Keep ref in sync with state
    useEffect(() => {
      isScrolledRef.current = isScrolled;
    }, [isScrolled]);

    // Effect to change text color based on background
    useEffect(() => {
      setTextColor(isScrolled ? 'text-primary' : 'text-white');
    }, [isScrolled]);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          setIsMobile(containerRef.current.offsetWidth < 1024);
        }
      };

      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const shouldBeScrolled = scrollY > 50;
            
            if (shouldBeScrolled !== isScrolledRef.current) {
              setIsScrolled(shouldBeScrolled);
            }

            if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
            }

            if (!isNavigating) {
              scrollTimeoutRef.current = setTimeout(() => {
                const sections = ['quem-somos', 'servicos', 'portfolio', 'contato'];
                let currentSection = ''; // No section active by default

                const sectionElements = sections.map(id => {
                  const element = document.getElementById(id);
                  if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                      id,
                      top: rect.top + window.scrollY,
                      bottom: rect.bottom + window.scrollY,
                    };
                  }
                  return null;
                }).filter(Boolean);

                const currentScrollY = window.scrollY + 200;
                sectionElements.sort((a, b) => (a?.top || 0) - (b?.top || 0));

                // Only mark a section as active if we're actually in it
                for (let i = 0; i < sectionElements.length; i++) {
                  const section = sectionElements[i];
                  const nextSection = sectionElements[i + 1];
                  
                  if (section && currentScrollY >= section.top) {
                    if (!nextSection || currentScrollY < nextSection.top) {
                      currentSection = section.id;
                      break;
                    }
                  }
                }

                // Special case for bottom of page
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                  currentSection = 'contato';
                }

                setActiveSection(currentSection);
              }, 50);
            }
            
            ticking = false;
          });
          ticking = true;
        }
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [isNavigating]);

    // Función para hacer scroll suave con offset para la navbar
    const scrollToSection = (element: Element) => {
      const navbarHeight = isMobile ? 56 : 64; // h-14 = 56px, h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra de padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    return (
      <>
      <header
        ref={combinedRef}
        className={cn(
          'fixed top-0 z-50 w-full px-2 md:px-4 [&_*]:no-underline',
          'transition-all duration-200 ease-out',
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50' 
            : 'bg-transparent',
          className
        )}
        style={{
          transitionProperty: 'background-color, backdrop-filter, box-shadow, border-color',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-out'
        }}
        {...props}
      >
        <div className="container mx-auto flex h-14 md:h-16 max-w-screen-2xl items-center justify-between gap-2 px-4 md:px-6">
          {/* Left side - Logo only */}
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsNavigating(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  setIsNavigating(false);
                }, 600);
              }}
              className={`flex items-center space-x-1 md:space-x-2 transition-colors cursor-pointer ${textColor} hover:opacity-80`}
            >
              <div className="flex items-center">
                {logo}
              </div>
              <span className={`font-bold text-lg sm:text-xl md:text-3xl transition-colors duration-200 ${textColor}`}>Agra Productora</span>
            </button>
          </div>

          {/* Right side - Navigation menu for desktop, hamburger for mobile */}
          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            {!isMobile && (
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.href?.startsWith('#')) {
                            setIsNavigating(true);
                            const element = document.querySelector(link.href);
                            if (element) {
                              scrollToSection(element);
                              setTimeout(() => {
                                setIsNavigating(false);
                              }, 600);
                            }
                          }
                        }}
                        className={cn(
                          'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer relative',
                          'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100',
                          (activeSection === link.href?.replace('#', '') && activeSection !== '') && 'before:scale-x-100 text-primary'
                        )}
                        data-active={activeSection === link.href?.replace('#', '') && activeSection !== ''}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {/* Mobile menu */}
            {isMobile && (
              <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button
                    className={`group h-8 w-8 hover:bg-accent hover:text-accent-foreground ${textColor}`}
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon className={textColor} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="text-center">
                      <span className="text-xl font-bold">Agra Productora</span>
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 pb-4">
                    <NavigationMenu className="max-w-none">
                      <NavigationMenuList className="flex-col items-start gap-2">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <DrawerClose asChild>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (link.href?.startsWith('#')) {
                                    setIsNavigating(true);
                                    const element = document.querySelector(link.href);
                                    if (element) {
                                      scrollToSection(element);
                                      setTimeout(() => {
                                        setIsNavigating(false);
                                      }, 600);
                                    }
                                  }
                                  // Cerrar el drawer inmediatamente
                                  setIsDrawerOpen(false);
                                }}
                                className={cn(
                                  'flex w-full items-center justify-center rounded-md px-4 py-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                  (activeSection === link.href?.replace('#', '') && activeSection !== '') && 'bg-accent text-accent-foreground'
                                )}
                              >
                                {link.label}
                              </button>
                            </DrawerClose>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </DrawerContent>
              </Drawer>
            )}

            {/* Optional buttons */}
            {(signInText || ctaText) && (
              <>
                {signInText && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSignInClick) onSignInClick();
                    }}
                  >
                    {signInText}
                  </Button>
                )}
                {ctaText && (
                  <Button
                    size="sm"
                    className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCtaClick) onCtaClick();
                    }}
                  >
                    {ctaText}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
  }
);

Navbar03.displayName = 'Navbar03';

export { Logo, HamburgerIcon };