import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Facilities } from "@/components/facilities"
import { Admissions } from "@/components/admissions"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import Atmosphere from "@/components/atmosphere"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense>
      <div className="min-h-screen" suppressHydrationWarning={true}>
        <Header />
        <Hero />
        <Atmosphere />
        <About />
        <Facilities />
        <Admissions />
        <News />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  )
}
