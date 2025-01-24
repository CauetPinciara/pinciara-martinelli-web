"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center">
          <Image
            src="/logo.svg?height=60&width=60"
            alt="Pinciaria Martinelli"
            width={60}
            height={60}
            className="object-cover"
            priority
          />
          <h1
            className={cn(
              "font-[Forum] text-3xl font-bold  pl-4 transition-all duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            Pinciara Martinelli
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#services"
            className={cn(
              "text-sm hover:text-primary transition-all duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            Serviços
          </Link>
          <Link
            href="#about"
            className={cn(
              "text-sm hover:text-primary transition-all duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            Sobre Nós
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors duration-300",
                  isScrolled ? "text-black" : "text-white"
                )}
              />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-full flex flex-col">
            <SheetTitle className="text-primary text-xl">Páginas:</SheetTitle>
            <nav className="flex flex-col gap-4 mt-2 flex-grow">
              <Link
                href="#services"
                className="text-lg hover:text-primary text-primary"
              >
                Serviços
              </Link>
              <Link
                href="#about"
                className="text-lg hover:text-primary text-primary"
              >
                Sobre Nós
              </Link>
            </nav>
            <SheetFooter className="mt-auto">
              <Button size="lg" className="bg-salmon-500 font-bold">
                Fale com um Especialista
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
