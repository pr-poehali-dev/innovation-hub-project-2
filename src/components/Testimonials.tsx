export function Testimonials() {
  const testimonials = [
    {
      name: "Анна Смирнова",
      role: "Владелец интернет-магазина",
      image: "/professional-woman-headshot.png",
      quote:
        "Передала всю бухгалтерию ИП три года назад. Больше не думаю о налогах и отчётах — всё делают вовремя и без замечаний. Рекомендую всем предпринимателям!",
    },
    {
      name: "Дмитрий Волков",
      role: "Директор ООО «СтройМастер»",
      image: "/professional-man-headshot.png",
      quote:
        "Помогли пройти налоговую проверку без единого штрафа. Все документы были в идеальном порядке. Теперь работаем на постоянной основе — спокойно и уверенно.",
    },
    {
      name: "Елена Фёдорова",
      role: "Основатель салона красоты",
      image: "/professional-woman-smiling.png",
      quote:
        "Очень удобно — они сами напоминают о сроках, сами сдают отчёты. Я занимаюсь клиентами, а они занимаются цифрами. Идеальное разделение труда!",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Отзывы клиентов</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Нам доверяют предприниматели</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
