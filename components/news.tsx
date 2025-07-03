import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Newspaper, TrendingUp } from "lucide-react"

export function News() {
  const news = [
    {
      date: "01 Iyul 2025",
      title: "Qabul",
      excerpt:
        "2025–2026 o‘quv yili uchun qabul jarayoni boshlandi. Sizni maktabimizda kutib qolamiz!",
      image: "/tadbir.jpg",
    },
    {
      date: "01 Iyul 2025",
      title: "Xalqaro olimpiadada g'alaba",
      excerpt: "Maktabimiz o'quvchilari Matematika bo'yicha xalqaro olimpiadada yuqori natijalar ko'rsatdi.",
      image: "/dubai.jpg",

    },
    {
      date: "01 Iyul 2025",
      title: "Sport musoboqalari",
      excerpt: "O‘quvchilar o‘rtasida sog‘lom raqobat ruhida o‘tgan sport musoboqalari yuqori kayfiyatda tashkil etildi.",
      image: "/sport01.jpg",

    },
  ]


  return (
    <section id="news" className="py-20 bg-[#14253B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#fff] rounded-full mb-6">
            <Newspaper className="h-4 w-4 text-[#14253B] mr-2" />
            <span className="text-[#14253B] font-medium">Yangiliklar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#fff]
          to-[#fff] bg-clip-text text-transparent mb-6">
            So'nggi yangiliklar
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Maktabimizning eng so'nggi yangiliklari, yutuqlari va voqealari bilan doimo xabardor bo'ling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-12">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full  h-min-full  group-hover:scale-110 transition-transform duration-500 object-fill"
                />
                
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#14253B]transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 leading-relaxed">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
