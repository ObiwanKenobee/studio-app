import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary/50">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Planetary Covenant. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
          <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="#">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
