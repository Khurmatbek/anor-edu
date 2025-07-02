import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Newspaper, TrendingUp } from "lucide-react"

export function News() {
  const news = [
    {
      date: "01 Iyul 2025",
      title: "Yangi o'quv yili uchun qabul boshlandi",
      excerpt:
        "2025-2026 o'quv yili uchun qabul jarayoni rasmiy ravishda boshlandi. ",
      image: "/hero.jpg",
      category: "Qabul",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      date: "01 Iyul 2025",
      title: "Xalqaro olimpiadada g'alaba",
      excerpt: "Maktabimiz o'quvchilari Matematika bo'yicha xalqaro olimpiadada yuqori natijalar ko'rsatdi.",
      image: "/dubai.jpg",
      category: "Muvaffaqiyat",
      gradient: "from-red-500 to-red-600",
    },
    {
      date: "01 Iyul 2025",
      title: "Sport musoboqalari",
      excerpt: "O‘quvchilar o‘rtasida sog‘lom raqobat ruhida o‘tgan sport musoboqalari yuqori kayfiyatda tashkil etildi.",
      image: "/sport.jpg",
      category: "Yangilik",
      gradient: "from-secondary-500 to-secondary-600",
    },
  ]


  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#14253B] rounded-full mb-6">
            <Newspaper className="h-4 w-4 text-[#fff] mr-2" />
            <span className="text-[#fff] font-medium">Yangiliklar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#14253B]
          to-[#14253bed] bg-clip-text text-transparent mb-6">
            So'nggi yangiliklar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="w-full min-h-[350px] h-full  group-hover:scale-110 transition-transform duration-500 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold rounded-full`}
                >
                  {item.category}
                </div>
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
