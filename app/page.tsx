import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Facilities } from "@/components/facilities"
import { Admissions } from "@/components/admissions"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Admissions />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}
