'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Pyramid } from 'lucide-react';
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

// Pyramid logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return <Pyramid size={24} {...props} />
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
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 1024); // 1024px is lg breakpoint - more space for mobile menu
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Combine refs
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
          'fixed top-0 z-50 w-full transition-all duration-300 px-2 md:px-4 [&_*]:no-underline',
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b shadow-sm' 
            : 'bg-transparent',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-14 md:h-16 max-w-screen-2xl items-center justify-between gap-2 px-4 md:px-6">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground mr-2"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
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
                                onClick={(e) => e.preventDefault()}
                                className={cn(
                                  'flex w-full items-center justify-center rounded-md px-4 py-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                  link.active && 'bg-accent text-accent-foreground'
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
            {/* Logo */}
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-1 md:space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-lg md:text-2xl">
                  {logo}
                </div>
                <span className="font-bold text-lg sm:text-xl md:text-3xl">Agra Productora</span>
              </button>
          </div>
          {/* Right side - Navigation menu */}
          {!isMobile && (
            <NavigationMenu className="flex">
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className={cn(
                        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer relative',
                        'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100',
                        link.active && 'before:scale-x-100 text-primary'
                      )}
                      data-active={link.active}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}
          {/* Right side - Only show if signInText or ctaText are provided */}
          {(signInText || ctaText) && (
            <div className="flex items-center gap-3">
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
            </div>
          )}
        </div>
      </header>
    </>
  );
  }
);

Navbar03.displayName = 'Navbar03';

export { Logo, HamburgerIcon };