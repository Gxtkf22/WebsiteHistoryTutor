export function CTA() {
  return (
    <section
      id="enroll"
      className="relative z-10 text-center"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,31,46,0.35) 0%, transparent 70%), var(--bg-deep)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div
          className="flex items-center justify-center gap-3 mb-4 reveal"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.68rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Набор открыт
        </div>

        <h2
          className="mb-6 reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--cream)',
            lineHeight: 1.15,
          }}
        >
          Следующий урок истории —<br />
          <em className="italic" style={{ color: 'var(--gold)' }}>
            первый, который понравится
          </em>
        </h2>

        <p
          className="mb-10 reveal"
          style={{
            fontSize: '0.95rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
          }}
        >
          Запишитесь сейчас — и уже через неделю ваш ребёнок будет рассказывать
          вам за ужином, кто такой Ришелье и почему пала Римская империя. Места
          ограничены — в каждой группе не более 6 учеников.
        </p>

        <div
          className="inline-flex items-center gap-2 border border-[rgba(168,54,74,0.3)] px-4 py-2 rounded-sm mb-8 reveal"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--red-acc)',
            background: 'rgba(168,54,74,0.07)',
          }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--red-acc)] animate-pulse" />
          Идёт набор · Места ограничены
        </div>

        <br />

        <a
          href="https://wa.me/"
          className="inline-block relative overflow-hidden px-14 py-5 rounded-sm shadow-[0_6px_40px_rgba(201,168,76,0.35),0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_10px_50px_rgba(201,168,76,0.5),0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1 reveal group"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--bg-deep)',
            background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)',
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">⚜ Записаться на курс</span>
        </a>
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.85);
          }
        }

        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
