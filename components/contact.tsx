"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Manzil",
      content: ["Toshkent shahar, Olmazor tumani,", "Farobiy koʻchasi,  259-uy"],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: ["+998 95-898-88-88", "+998 95-898-88-88"],
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@anorinternational.uz", "admissions@anorinternational.uz"],
      gradient: "from-blue-500 to-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-success-600 mr-2" />
            <span className="text-success-700 font-medium">Aloqa</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-900 to-secondary-700 bg-clip-text text-transparent mb-6">
            Biz bilan bog'laning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz. Bog'laning yoki maktabga tashrif buyuring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${info.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.content.map((line, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">
                  Xabar yuborish
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Ism</label>
                    <Input
                      placeholder="Ismingizni kiriting"
                      className="bg-white/80 backdrop-blur-sm outline-none focus-visible:border-none border-gray-200 focus:border-primary-400 rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Familiya</label>
                    <Input
                      placeholder="Familiyangizni kiriting"
                      className="bg-white/80 backdrop-blur-sm focus-visible:border-none border-gray-200  focus:border-primary-400 rounded-xl"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    className="bg-white/80 backdrop-blur-sm focus-visible:border-none border-gray-200 focus:border-primary-400 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Telefon</label>
                  <Input type="tel"
                    maxLength={13}
                    placeholder="+998 90 123 45 67"
                    className="bg-white/80 backdrop-blur-sm focus-visible:border-none border-gray-200 focus:border-primary-400 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Xabar</label>
                  <Textarea
                    maxLength={1000}
                    placeholder="Xabaringizni yozing..."
                    className="min-h-[65px] resize-none focus-visible:border-none bg-white/80 backdrop-blur-sm border-gray-200 focus:border-primary-400 rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-4 rounded-xl hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Xabar yuborish</span>
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
