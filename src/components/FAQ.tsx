import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Работаете ли вы с моей системой налогообложения?",
      answer:
        "Да! Мы работаем со всеми режимами: УСН (доходы и доходы минус расходы), ОСНО, ПСН, НПД. Подскажем, какой режим выгоднее для вашего бизнеса.",
    },
    {
      question: "Как вы получаете мои документы?",
      answer:
        "Удалённо: через личный кабинет, мессенджеры или электронную почту. Никаких визитов в офис — всё максимально удобно для вас.",
    },
    {
      question: "Что происходит, если налоговая выставит штраф?",
      answer:
        "Если штраф возник по нашей вине, мы его полностью возмещаем. Наша ответственность закреплена договором.",
    },
    {
      question: "Можно ли перейти к вам от другого бухгалтера?",
      answer:
        "Да, принимаем дела в любое время года. Проведём аудит текущего учёта, выявим ошибки и приведём всё в порядок.",
    },
    {
      question: "Как быстро вы отвечаете на вопросы?",
      answer:
        "На срочные вопросы отвечаем в течение 2 часов в рабочее время. Консультации по телефону и в мессенджерах — без ограничений.",
    },
    {
      question: "Помогаете ли вы при налоговых проверках?",
      answer:
        "Да. Готовим ответы на требования, формируем пакет документов и при необходимости представляем ваши интересы в налоговой.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
