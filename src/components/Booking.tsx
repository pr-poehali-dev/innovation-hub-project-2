import { Button } from "@/components/ui/button"

export function Booking() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com", "_blank")
  }

  const handleContactClick = () => {
    window.open("tel:+78001234567")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы начать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Оставьте заявку на консультацию</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Расскажите о своём бизнесе — мы подберём оптимальный пакет услуг и рассчитаем стоимость
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Выберите удобное время</h3>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Запишитесь на бесплатную консультацию</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📅 Свободные слоты в реальном времени</p>
                <p>🌍 Работаем по всей России удалённо</p>
                <p>✉️ Подтверждение на вашу почту</p>
              </div>
              <Button
                onClick={handleCalendlyClick}
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Открыть календарь
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Наши тарифы</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">ИП на УСН (без сотрудников)</span>
                  <span className="font-semibold text-foreground">от 2 000 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">ИП / ООО с сотрудниками</span>
                  <span className="font-semibold text-foreground">от 5 000 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">ООО на ОСНО</span>
                  <span className="font-semibold text-foreground">от 10 000 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold text-foreground">Консультация</span>
                  <span className="text-2xl font-bold text-accent">Бесплатно</span>
                </div>
              </div>

              <Button
                onClick={handleContactClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Позвонить нам
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Бесплатная первичная консультация • ✓ Финансовая ответственность • ✓ Работаем удалённо
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
