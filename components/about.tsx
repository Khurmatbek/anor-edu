import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, BookOpen, Target, Heart } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Yuqori sifat",
      description: "Xalqaro standartlarga mos ta'lim dasturlari",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: Users,
      title: "Tajribali o'qituvchilar",
      description: "Malakali va tajribali pedagog kadrlar",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Globe,
      title: "Xalqaro dasturlar",
      description: "Xalqaro tillar sohasida yuqori sifatli ta’lim",
      color: "from-success-500 to-success-600",
    },
    {
      icon: BookOpen,
      title: "Zamonaviy yondashuv",
      description: "Innovatsion ta'lim texnologiyalari",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
            <Target className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">Biz haqimizda</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-900 to-secondary-700 bg-clip-text text-transparent mb-6">
            Ta'lim sohasidagi liderlar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2024-yildan beri O'zbekistonda faoliyat yuritib, minglab o'quvchilarga sifatli xalqaro ta'lim berish orqali
            kelajak avlodini tayyorlashda o'z hissamizni qo'shmoqdamiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-secondary-200/50 rounded-3xl transform rotate-3"></div>
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Maktab binosi"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Bizning missiyamiz</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Har bir o'quvchining individual qobiliyatlarini rivojlantirish, ularni global dunyoda muvaffaqiyatli
                bo'lishga tayyorlash va hayot davomida o'rganishga bo'lgan muhabbatni singdirish.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Zamonaviy ta'lim texnologiyalari, xalqaro standartlar va o'zbek milliy qadriyatlarini uyg'unlashtirib,
                har bir bolaning potentsialini ochishga yordam beramiz.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group text-center p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="space-y-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
