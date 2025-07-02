import { Facebook, Instagram, Mail, Phone,  } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#14253B]  text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2  justify-between">
          <div className="space-y-4">
            <Link href={"/"} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  <Image src="/logo.png" alt="Anor logo" width={40} height={40} />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Anor International School</h3>
              </div>
            </Link>
            <p className="text-white/80">
              Kelajak uchun ta'lim berish - bizning asosiy maqsadimiz. Har bir bola uchun sifatli va zamonaviy ta'lim.
            </p>
            <div className="flex space-x-4">
              <Link href={"https://www.facebook.com/profile.php?id=61562381963338&locale=ru_RU"} target="_blank" >
                <Facebook className="h-6 w-6 text-blue-700 hover:text-white cursor-pointer transition-colors duration-300" />
              </Link>

              <Link href={"https://www.instagram.com/anor_international_school/"} target="_blank" >
                <Instagram className="h-6 w-6 text-pink-600 hover:text-white cursor-pointer transition-colors duration-300" />
              </Link>

            </div>
          </div>

          <div className="text-end">
            <h4 className="text-lg font-semibold mb-4 lg:text-end md:text-start">Aloqa</h4>
            <div className="space-y-3 flex flex-col items-end">
              <a href="tel:+998958988888" className="flex items-center space-x-3 text-end">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">+998 95-898-88-88</span>
              </a>
              
              <a href="https://yandex.uz/maps/-/CHgbNAlu" target="_blank" className="text-white/80 flex items-start justify-start  ">

                Toshkent shahar  Olmazor tumani, Farobiy koʻchasi 259-uy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">© 2025 Anor International School. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
