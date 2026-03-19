export function Pricing() {
  const plans = [
    {
      label: 'Разовый урок',
      amount: '1 400',
      desc: 'Абонемент — оплата за каждое занятие',
      features: [
        'Гибкий график',
        'Полноценный урок 60 мин',
        'Домашнее задание с разбором',
      ],
      featured: false,
    },
    {
      label: 'Полный курс',
      amount: '12 000',
      desc: 'Весь путь от древности до наших дней',
      features: [
        'Все 8 модулей программы',
        'Дипломный проект',
        'Индивидуальная обратная связь',
        'Конспекты и материалы в подарок',
      ],
      featured: true,
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
          Стоимость
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
          Инвестиция <em className="italic" style={{ color: 'var(--gold)' }}>в знания</em>
        </h2>

        <p
          className="max-w-2xl mb-12 reveal"
          style={{
            fontSize: '1.05rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
          }}
        >
          Группы маленькие — максимум 6 учеников, чтобы каждый получил личное
          внимание репетитора.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden text-center p-10 rounded border transition-all duration-300 hover:-translate-y-1 reveal ${
                plan.featured
                  ? 'border-[var(--gold-dim)]'
                  : 'border-[rgba(201,168,76,0.18)] hover:border-[rgba(201,168,76,0.4)]'
              }`}
              style={{
                background: plan.featured
                  ? 'linear-gradient(145deg, #1a1830, #131326)'
                  : 'var(--bg-card)',
              }}
            >
              {plan.featured && (
                <div
                  className="absolute top-5 -right-10 px-12 py-1 rotate-[35deg]"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                    color: 'var(--bg-deep)',
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                  }}
                >
                  ВЫГОДНО
                </div>
              )}

              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                }}
              >
                {plan.label}
              </div>

              <div
                className="leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--cream)',
                }}
              >
                {plan.amount}{' '}
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: 'var(--cream-dim)',
                  }}
                >
                  ₽
                </span>
              </div>

              <div
                className="mt-3 mb-6"
                style={{ fontSize: '0.88rem', color: 'var(--cream-dim)' }}
              >
                {plan.desc}
              </div>

              <ul className="text-left flex flex-col gap-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span
                      className="flex-shrink-0"
                      style={{ color: 'var(--gold)' }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--cream-dim)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
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
