export function Details() {
  const requirements = [
    'Стационарный компьютер или ноутбук с камерой и микрофоном',
    'Стабильный интернет и Zoom',
    'Тетрадь или блокнот для заметок — история любит конспекты',
    'Желание разбираться, а не просто «сдать»',
  ];

  const schedule = [
    {
      day: 'Среда',
      time: '16:00 МСК',
      group: 'Группа 5–7 класс · базовый курс',
    },
    {
      day: 'Пятница',
      time: '15:30 МСК',
      group: 'Группа 8–9 класс · подготовка к ОГЭ',
    },
    {
      day: 'Суббота',
      time: '11:00 МСК',
      group: 'Группа 10–11 класс · подготовка к ЕГЭ',
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
          Организация
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
          Что нужно знать <em className="italic" style={{ color: 'var(--gold)' }}>заранее</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Requirements */}
          <div
            className="p-8 rounded border border-[rgba(201,168,76,0.18)] reveal"
            style={{ background: 'var(--bg-card)' }}
          >
            <h3
              className="mb-5 pb-3 border-b border-[rgba(201,168,76,0.18)]"
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              Что потребуется
            </h3>

            <ul className="flex flex-col gap-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="text-[0.5rem] mt-2 flex-shrink-0"
                    style={{ color: 'var(--gold-dim)' }}
                  >
                    ◆
                  </span>
                  <span style={{ fontSize: '0.93rem', color: 'var(--cream-dim)' }}>
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div
            className="p-8 rounded border border-[rgba(201,168,76,0.18)] reveal"
            style={{ background: 'var(--bg-card)' }}
          >
            <h3
              className="mb-5 pb-3 border-b border-[rgba(201,168,76,0.18)]"
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              Расписание занятий
            </h3>

            <div className="flex flex-col">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-1 py-3 ${
                    index !== schedule.length - 1
                      ? 'border-b border-[rgba(201,168,76,0.08)]'
                      : ''
                  }`}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-cinzel)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.day}
                  </div>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--cream)',
                      fontWeight: 600,
                    }}
                  >
                    {item.time}
                  </div>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--cream-dim)',
                    }}
                  >
                    {item.group}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
