export function Curriculum() {
  const modules = [
    {
      num: '01',
      title: 'Древний мир и Античность',
      description:
        'Первые цивилизации, Древняя Греция и Рим. Как устроен исторический источник и почему прошлое важно сегодня.',
    },
    {
      num: '02',
      title: 'Средневековье и Русь',
      description:
        'Крещение Руси, монгольское нашествие, становление Московского государства. Работаем с картами и хронологией.',
    },
    {
      num: '03',
      title: 'Эпоха великих реформ',
      description:
        'Пётр I, Екатерина II — как Россия становилась империей. Разбираем причины и следствия, а не просто даты.',
    },
    {
      num: '04',
      title: 'XIX век: на пороге перемен',
      description:
        'Декабристы, отмена крепостного права, народничество. Учимся анализировать исторические документы и манифесты.',
    },
    {
      num: '05',
      title: 'Революция и Гражданская война',
      description:
        '1917 год и его последствия. Понимаем логику событий через личности, а не через заученные формулировки.',
    },
    {
      num: '06',
      title: 'СССР: от индустриализации до распада',
      description:
        'Великая Отечественная война, хрущёвская оттепель, застой и перестройка. Ключевые фигуры и переломные моменты.',
    },
    {
      num: '07',
      title: 'Всемирная история: ключевые события',
      description:
        'Мировые войны, холодная война, деколонизация. Россия в контексте мировых процессов — именно так спрашивают на ЕГЭ.',
    },
    {
      num: '08',
      title: 'Дипломная работа: «Моё историческое исследование»',
      description:
        'Ученик самостоятельно выбирает эпоху и готовит мини-проект: анализ события, личности или явления с аргументацией.',
    },
  ];

  return (
    <section className="relative z-10" style={{ background: 'var(--bg-deep)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div
          className="flex items-center gap-3 mb-3 reveal"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.68rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Программа
          <div className="h-px max-w-[60px] flex-1 bg-[var(--gold-dim)]" />
        </div>

        <h2
          className="mb-4 reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.2,
          }}
        >
          Путешествие <em className="italic" style={{ color: 'var(--gold)' }}>сквозь эпохи</em>
        </h2>

        <p
          className="max-w-2xl mb-12 reveal"
          style={{
            fontSize: '1.05rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
          }}
        >
          Восемь модулей — от древних цивилизаций до новейшей истории. Каждый урок
          — это живой рассказ, а не зубрёжка дат.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((module, index) => (
            <div
              key={index}
              className="flex gap-5 p-7 rounded border border-[rgba(201,168,76,0.18)] transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:bg-[var(--bg-card2)] reveal"
              style={{ background: 'var(--bg-card)' }}
            >
              <div
                className="min-w-[2.2rem] leading-none opacity-70"
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--burgundy)',
                }}
              >
                {module.num}
              </div>

              <div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: 'var(--gold-light)',
                    lineHeight: 1.3,
                  }}
                >
                  {module.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.87rem',
                    color: 'var(--cream-dim)',
                    lineHeight: 1.6,
                  }}
                >
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </section>
  );
}
