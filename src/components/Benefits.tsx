export function Benefits() {
  const benefits = [
    {
      icon: "📋",
      title: "Подготовка и сдача отчётности",
      description: "Готовим и сдаём все виды отчётности в налоговую, ПФР и ФСС в установленные сроки",
    },
    {
      icon: "💰",
      title: "Расчёт и оплата налогов",
      description: "Рассчитываем налоги, контролируем сроки уплаты и формируем платёжные поручения",
    },
    {
      icon: "👥",
      title: "Расчёты с сотрудниками и кадровый учёт",
      description: "Начисление зарплаты, отпускных, больничных, оформление кадровых документов",
    },
    {
      icon: "📄",
      title: "Документы для налоговой",
      description: "Подготовка ответов на запросы и требования налоговых органов в короткие сроки",
    },
    {
      icon: "🔍",
      title: "Проверка контрагентов",
      description: "Анализируем надёжность ваших партнёров и помогаем снизить налоговые риски",
    },
    {
      icon: "⚖️",
      title: "Помощь в правовых вопросах",
      description: "Консультируем по договорному праву, корпоративным и налоговым спорам",
    },
    {
      icon: "🏧",
      title: "Обмен данными с кассами и банками",
      description: "Настраиваем и ведём обмен данными с онлайн-кассами и банковскими сервисами",
    },
    {
      icon: "🛡️",
      title: "Подготовка к проверкам",
      description: "Аудит документов и учёта перед налоговой проверкой, сопровождение в ходе проверки",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Наши услуги</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Полный спектр бухгалтерских услуг
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Берём на себя все задачи по бухгалтерии, налогам и кадрам — чтобы вы могли сосредоточиться на развитии бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
