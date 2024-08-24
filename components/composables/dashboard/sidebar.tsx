"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const initialLinks = [
  { label: "Dashboard", Icon: Home, href: "/dashboard", active: true },
  { label: "Others", Icon: ShoppingCart, href: "#", active: false },
  { label: "Products", Icon: Package, href: "#", active: false },
  { label: "Customers", Icon: Users2, href: "#", active: false },
  { label: "Analytics", Icon: LineChart, href: "#", active: false },
  { label: "Settings", Icon: Settings, href: "#", active: false },
];

export function SideBar() {
  const [links, setLinks] = useState(initialLinks);

  const handleLinkClick = (index: number) => {
    setLinks((prevLinks) =>
      prevLinks.map((link, i) => ({
        ...link,
        active: i === index,
      }))
    );
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {links.map((link, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  link.active ? "bg-accent text-accent-foreground" : ""
                )}
                onClick={() => handleLinkClick(i)}
              >
                <span className="sr-only">{link.label}</span>
                <link.Icon className="h-5 w-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
}
