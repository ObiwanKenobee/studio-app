'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Globe, Leaf, Menu, VenetianMask } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/covenant', label: 'The Covenant' },
  { href: '/dashboard', label: 'Earth Scorecard' },
];

const moduleLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Forum Agora",
    href: "/agora",
    description: "Global council hub for wisdom-weighted consensus and live-translated roundtables.",
  },
  {
    title: "Projects Exchange",
    href: "/projects",
    description: "Interactive map to submit, fund, or replicate successful regenerative solution hubs.",
  },
  {
    title: "Knowledge Realms",
    href: "/knowledge",
    description: "Searchable archives of indigenous tech, science, and spiritual philosophies.",
  },
  {
    title: "Tech for Earth Lab",
    href: "/tech-lab",
    description: "A collaboration space for climate tech, decentralized health, and ethical AI.",
  },
]


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinksContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className={cn(
            'transition-colors hover:text-primary text-sm font-medium',
            pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
       <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">Modules</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {moduleLinks.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Planetary Covenant</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinksContent />
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Select defaultValue="en">
            <SelectTrigger className="w-[150px] hidden sm:flex">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="sw">Swahili</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="mi">Māori</SelectItem>
              <SelectItem value="la">Latin</SelectItem>
            </SelectContent>
          </Select>

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                 <Leaf className="h-6 w-6 text-primary" />
                 <span className="font-bold font-headline text-lg">Planetary Covenant</span>
              </Link>
              <nav className="flex flex-col space-y-4 text-lg">
                 {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <p className="font-semibold">Modules</p>
                  {moduleLinks.map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-muted-foreground hover:text-primary pl-4"
                    >
                      {link.title}
                    </Link>
                  ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
