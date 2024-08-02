import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#", label: "Product" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-6 px-16 bg-background text-foreground">
      <div>
        <Link href="#" className="flex items-center" prefetch={false}>
          <LogInIcon className="w-6 h-6" />
          <span className="ml-2 text-lg font-semibold">Company</span>
        </Link>
      </div>
      <nav className="lg:flex hidden space-x-4">
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
      </nav>
      <div className="lg:flex hidden items-center space-x-4">
        <Button variant="outline" className="text-sm">
          Login
        </Button>
        <Button className="text-sm">Register</Button>
      </div>
      <div className="lg:hidden flex items-center">
        <button className="text-foreground">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
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
