"use client"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Microscope, Dumbbell, Palette, Monitor, BookOpen, Utensils, Shield, Zap } from "lucide-react"

export function Facilities() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const facilities = [
    {
      icon: Microscope,
      title: "Zamonaviy laboratoriyalar",
      description: "Fizika, kimyo va biologiya fanlari uchun to'liq jihozlangan laboratoriyalar",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: Dumbbell,
      title: "Sport majmuasi",
      description: "Basketbol, voleybol va futbol uchun zamonaviy sport zallari",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Palette,
      title: "San'at studiyasi",
      description: "Rasm, musiqa va ijodiy faoliyat uchun maxsus jihozlangan xonalar",
      gradient: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Monitor,
      title: "IT markazi",
      description: "Zamonaviy kompyuterlar va dasturlash o'rgatish uchun texnologiyalar",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: BookOpen,
      title: "Kutubxona",
      description: "10,000 dan ortiq kitob va elektron resurslar bilan ta'minlangan kutubxona",
      gradient: "from-accent-600 to-secondary-500",
    },
    {
      icon: Utensils,
      title: "Oshxona va ovqatlanish",
      description: "Sog'lom va mazzali ovqatlar tayyorlanadigan zamonaviy oshxona",
      gradient: "from-success-600 to-accent-500",
    },
  ]

  return (
    <section
      id="facilities"
      className="py-20 bg-gradient-to-br from-[#14253B] via-[#14253bf0] to-[#14253bea] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#14253b6f] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#14253b49] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Zap className="h-4 w-4 text-[#fff] mr-2" />
            <span className="text-white font-medium">Imkoniyatlar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Zamonaviy jihozlar va
            <span className="text-[#e1b137]  block">
              qulay muhit
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            O'quvchilarimizning to'laqonli rivojlanishi uchun eng zamonaviy jihozlar va professional muhit yaratilgan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${facility.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <facility.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{facility.title}</h4>
                <p className="text-white/80 leading-relaxed">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
