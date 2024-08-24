import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#", label: "Product" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-24 bg-background text-foreground">
      <div>
        <Link href="/" className="flex items-center" prefetch={false}>
          <BadgeDollarSign className="w-6 h-6" />
          <span className="ml-2 text-lg font-semibold">Finance Tracker</span>
        </Link>
      </div>
      {/* <nav className="lg:flex hidden space-x-4">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </nav> */}
      <div className="lg:flex hidden items-center space-x-4">
        <Link href="/sign-in" className={cn(buttonVariants({variant:"outline"}), "text-sm")}>
          Login
        </Link>
        <Link href="/sign-up" className={cn(buttonVariants({variant:"default"}), "text-sm")}>
          Register
        </Link>
      </div>
      <div className="lg:hidden flex items-center">
        <button className="text-foreground">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
