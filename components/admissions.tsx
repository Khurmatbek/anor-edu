"use client"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, FileText, Users, Clock, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

export function Admissions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const router = useRouter();

  const handleScrolClick = () => {
    router.push("#contact")
  }

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

  const steps = [
    {
      icon: FileText,
      title: "Ariza topshirish",
      description: "Online yoki maktabga tashrif buyurib ariza topshiring",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: Users,
      title: "Suhbat",
      description: "O'quvchi va ota-onalar bilan suhbat o'tkazish",
      gradient: "from-secondary-500 to-secondary-600",
    },
    {
      icon: CheckCircle,
      title: "Test topshirish",
      description: "Yosh guruhiga mos ravishda bilim darajasini aniqlash",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Calendar,
      title: "Qabul",
      description: "Natijalar e'lon qilinishi va ro'yxatdan o'tish",
      gradient: "from-primary-500 to-primary-600",
    },
  ]

  const requirements = [
    "O'quvchining tug'ilganlik guvohnomasi",
    "Ota-onalarning pasport nusxalari",
    "Oldingi maktabdan ma'lumotnoma",
    "Tibbiy ma'lumotnoma",
    "3x4 o'lchamdagi 4 ta fotosurat",
  ]

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#14253B] rounded-full mb-6">
            <Calendar className="h-4 w-4 text-white mr-2" />
            <span className="text-white font-medium">Qabul jarayoni</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#14253B]
          to-[#14253bed] bg-clip-text text-transparent mb-6">
            Bizga qo'shiling!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maktabimizga qabul bo'lish uchun quyidagi oddiy bosqichlarni bajaring va kelajak ta'limingizni boshlang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#14253B] to-[#14253bed] rounded-2xl flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Kerakli hujjatlar</h3>
            </div>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#14253B] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[#14253B] to-[#14253beb] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Qabul ma'lumotlari</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <h4 className="font-bold text-white mb-2">2025-2026 o'quv yili</h4>
                <p className="text-white/90">Qabul: 1-iyul dan boshlab</p>
                <p className="text-white/90">Darslar boshlanishi: 2-sentabr</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-accent-300 mr-2" />
                  <h4 className="font-bold text-white">To'lov ma'lumotlari</h4>
                </div>
                <p className="text-white/90">1-4-sinflar:4.700.000 soʻm</p>
                <p className="text-white/90">5-11-sinflar: 4.900.000 soʻm</p>
              </div>
              <Button onClick={handleScrolClick} className="w-full bg-white text-[#14253B] hover:bg-accent-50 transition-all duration-300 hover:scale-105 rounded-xl font-semibold">
                Hoziroq ariza topshiring
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
