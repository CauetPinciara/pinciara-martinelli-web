"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
// import { forum } from "@/app/layout";

export function SiteHeader() {
  return (
    <header className="border-b">
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
          <h1 className="font-[Forum] text-3xl font-bold text-black pl-4">
            Pinciara Martinelli
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm hover:text-primary">
            Serviços
          </Link>
          <Link href="#about" className="text-sm hover:text-primary">
            Sobre Nós
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-lg hover:text-primary">
                Serviços
              </Link>
              <Link href="#about" className="text-lg hover:text-primary">
                Sobre Nós
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
