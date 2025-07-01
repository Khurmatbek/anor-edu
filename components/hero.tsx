"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Award, Users, User, School } from "lucide-react"
import { Router } from "next/router"
import { useRouter } from "next/navigation"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleClickScroll = () => {
    router.push("#contact")
  }
  const handleViewVideo = () => {
    // router.push("https://www.instagram.com/reel/DKM21buIh2Y/?utm_source=ig_web_copy_link&igsh=MTFtZXllOGV1MmpieA==");
    window.open("https://www.instagram.com/reel/DKM21buIh2Y/?utm_source=ig_web_copy_link&igsh=MTFtZXllOGV1MmpieA==", "_blank");
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="h-4 w-4 text-accent-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">O'zbekistondagi #1 xalqaro maktab</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block">Kelajak uchun</span>
                <span className="bg-gradient-to-r from-accent-400 via-accent-300 to-secondary-400 bg-clip-text text-transparent block">
                  Ta'lim Berish
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                Anor International School - zamonaviy ta'lim, xalqaro standartlar va har bir bolaning individual
                rivojlanishiga yo'naltirilgan maktab. Biz kelajak liderlarini tayyorlaymiz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleClickScroll}
                size="lg"
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-accent-500/25 transition-all duration-300 hover:scale-105"
              >
                Qabul haqida ma'lumot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleViewVideo}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-900 rounded-2xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Video ko'rish
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-white/70 text-sm">O'quvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-white/70 text-sm">O'qituvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-white/70 text-sm">Yillik tajriba</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Anor International School"
                  className="rounded-2xl shadow-2xl w-full"
                />

                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success-500 rounded-full flex items-center justify-center">
                      <School className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Mamnunlik</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">98%</div>
                      <div className="text-sm text-gray-600">Mamnunlik</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
