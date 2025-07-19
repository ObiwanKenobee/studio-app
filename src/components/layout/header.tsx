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
import { Globe, Leaf, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/covenant', label: 'The Covenant' },
  { href: '/council', label: 'Council' },
  { href: '/dashboard', label: 'Earth Scorecard' },
  { href: '/governance', label: 'Governance' },
  { href: '/forum', label: 'Forum' },
];

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
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
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
                <NavLinksContent />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
