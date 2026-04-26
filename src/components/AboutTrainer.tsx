export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Главный бухгалтер" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О нас</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш надёжный бухгалтер
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 10 лет ведём бухгалтерский учёт для малого и среднего бизнеса. Работаем с ИП,
              ООО, УСН, ОСНО и другими системами налогообложения.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Наша команда специализируется на комплексном бухгалтерском обслуживании: от первичной
              документации до представления интересов в налоговых органах. Мы следим за изменениями
              в законодательстве, чтобы вы всегда были в безопасности.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Аттестованные специалисты</p>
                  <p className="text-sm text-muted-foreground">Сертификаты ИПБ России</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+ клиентов</p>
                  <p className="text-sm text-muted-foreground">Ни одной штрафной санкции по нашей вине</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Финансовая ответственность</p>
                  <p className="text-sm text-muted-foreground">Возмещаем ущерб при ошибке в учёте</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
