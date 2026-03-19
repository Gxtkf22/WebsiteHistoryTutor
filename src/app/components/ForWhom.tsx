export function ForWhom() {
  const groups = [
    {
      icon: '📜',
      grade: 'Группа первая',
      title: '5–7 класс',
      description:
        'Для тех, кто только начинает изучать историю. Строим прочный фундамент, учимся работать с датами и событиями через живые истории и интерактив.',
    },
    {
      icon: '🏛️',
      grade: 'Группа вторая',
      title: '8–9 класс · ОГЭ',
      description:
        'Системная подготовка к ОГЭ: разбор типичных заданий, исторические источники, причинно-следственные связи. Уверенный результат на экзамене.',
    },
    {
      icon: '🎓',
      grade: 'Группа третья',
      title: '10–11 класс · ЕГЭ',
      description:
        'Глубокое погружение в материал ЕГЭ: эссе, работа с картами, анализ источников, сложные задания части С. Целевой балл — выше 80.',
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
          Аудитория
          <div
            className="h-px max-w-[60px] flex-1 bg-[var(--gold-dim)]"
          />
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
          Для кого <em className="italic" style={{ color: 'var(--gold)' }}>этот курс</em>
        </h2>

        <p
          className="max-w-2xl mb-12 reveal"
          style={{
            fontSize: '1.05rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
          }}
        >
          Три группы — для каждого возраста и цели. От первого знакомства с
          историей до серьёзной подготовки к экзаменам.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-8 rounded border border-[rgba(201,168,76,0.18)] transition-all duration-300 hover:border-[rgba(201,168,76,0.4)] hover:-translate-y-1 reveal"
              style={{ background: 'var(--bg-card)' }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: 'linear-gradient(90deg, var(--burgundy), var(--gold))',
                }}
              />

              <span className="block text-4xl mb-4">{group.icon}</span>

              <div
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                }}
              >
                {group.grade}
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--cream)',
                }}
              >
                {group.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--cream-dim)' }}>
                {group.description}
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
