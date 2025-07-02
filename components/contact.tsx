"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, MessageCircle, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    telefon: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Yuborilayotgan ma'lumotlar:", formData)

    try {
      // FormData yoki URLSearchParams ishlatish kerak
      const formDataToSend = new FormData()
      formDataToSend.append('ism', formData.ism)
      formDataToSend.append('familiya', formData.familiya)
      formDataToSend.append('telefon', formData.telefon)

      const response = await fetch("https://script.google.com/macros/s/AKfycbx66A-khvCZGl9crZfhEvluwUYJL2wUIdA7JWAkww29Lot0gEruMCS0MGutfC_mbsg/exec", {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend
      })

      // no-cors rejimida response ni tekshirib bo'lmaydi
      // Shuning uchun muvaffaqiyatli deb hisoblaymiz
      toast.success("Xabar muvaffaqiyatli yuborildi!")
      setFormData({ ism: "", familiya: "", telefon: "" })
      
    } catch (error) {
      console.error("Xatolik:", error)
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Manzil",
      content: ["Toshkent shahar, Olmazor tumani,", "Farobiy koʻchasi, 259-uy"],
      gradient: "from-[#14253B] to-[#14253bea]",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: ["+998 95-898-88-88", "+998 95-898-88-88"],
      gradient: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#14253B] rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-[#fff] mr-2" />
            <span className="text-[#fff] font-medium">Aloqa</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r text-[#14253B] bg-clip-text text-transparent mb-6">
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

          <Card className="bg-[#14253b4c] from-[#14253B] border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-[#14253B] to-[#14253B]">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <span className="bg-gradient-to-r text-[#14253B] bg-clip-text text-transparent">
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
                      name="ism"
                      value={formData.ism}
                      onChange={handleChange}
                      placeholder="Ismingizni kiriting"
                      className="bg-white/80 backdrop-blur-sm outline-none border-gray-200 rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Familiya</label>
                    <Input
                      name="familiya"
                      value={formData.familiya}
                      onChange={handleChange}
                      placeholder="Familiyangizni kiriting"
                      className="bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Telefon</label>
                  <Input
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    type="tel"
                    maxLength={13}
                    placeholder="+998 90 123 45 67"
                    className="bg-white/80 backdrop-blur-sm border-gray-200 rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#14253B] to-[#14253B] transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-4 rounded-xl hover:scale-105"
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