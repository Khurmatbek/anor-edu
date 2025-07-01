"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="tel:+998958988888" className="flex items-center space-x-1 cursor-pointer " >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 " />
              <span className="hidden sm:inline">+998 95-898-88-88</span>
              <span className="sm:hidden">95-898-88-88</span>
            </a>
            <div className="hidden sm:flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@anorinternational.uz</span>
            </div>
          </div>
          <div className="hidden lg:block text-xs">
            <span>Biz bilan bog'laning: Dushanba - Juma 8:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-800 rounded-full flex items-center justify-center shadow-lg">
              {/* <span className="text-white font-bold text-lg sm:text-xl"> */}
              <Image src="/logo.png" alt="Anor logo" width={100} height={100} />
              {/* </span> */}
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Anor International School</h1>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { name: "Bosh sahifa", href: "#home" },
              { name: "Biz haqimizda", href: "#about" },
              { name: "Imkoniyatlar", href: "#facilities" },
              { name: "Qabul", href: "#admissions" },
              { name: "Yangiliklar", href: "#news" },
              { name: "Aloqa", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-primary to-primary-800 hover:from-primary-800 hover:to-primary transition-all duration-200 shadow-lg">
              Ro'yxatdan o'tish
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="pt-4 pb-2 border-t border-primary-100 mt-4">
            <div className="flex flex-col space-y-3">
              {[
                { name: "Bosh sahifa", href: "#home" },
                { name: "Biz haqimizda", href: "#about" },
                { name: "Dasturlar", href: "#programs" },
                { name: "Imkoniyatlar", href: "#facilities" },
                { name: "Qabul", href: "#admissions" },
                { name: "Yangiliklar", href: "#news" },
                { name: "Aloqa", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-primary to-primary-800 hover:from-primary-800 hover:to-primary mx-4 mt-2 transition-all duration-200">
                Ro'yxatdan o'tish
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
