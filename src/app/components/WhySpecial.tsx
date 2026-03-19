export function WhySpecial() {
  const features = [
    {
      icon: '🧠',
      title: 'Живые истории, не зубрёжка',
      description:
        'Мнемотехники, сторителлинг и логика событий вместо механического запоминания дат и имён.',
    },
    {
      icon: '📝',
      title: 'Прицел на экзамен',
      description:
        'Все задания ОГЭ и ЕГЭ разбираются по реальным форматам: эссе, анализ источника, работа с картой.',
    },
    {
      icon: '🎭',
      title: 'Интерактивный формат',
      description:
        'Исторические симуляции, дискуссии, ролевые дебаты «в образе эпохи» — история оживает прямо на уроке.',
    },
    {
      icon: '🏆',
      title: 'Результат — выше 80 баллов',
      description:
        'Системный подход позволяет выйти на уверенный результат на ЕГЭ даже тем, кто раньше боялся истории.',
    },
  ];

  return (
    <section className="relative z-10" style={{ background: 'var(--bg-mid)' }}>
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
          Особенности
          <div className="h-px max-w-[60px] flex-1 bg-[var(--gold-dim)]" />
        </div>

        <h2
          className="mb-12 reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.2,
          }}
        >
          Почему этот курс <em className="italic" style={{ color: 'var(--gold)' }}>особенный?</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded border border-[rgba(201,168,76,0.18)] transition-transform duration-300 hover:-translate-y-1 reveal"
              style={{ background: 'var(--bg-card)' }}
            >
              <span className="block text-5xl mb-4">{feature.icon}</span>

              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  color: 'var(--cream)',
                }}
              >
                {feature.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--cream-dim)' }}>
                {feature.description}
              </p>
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
