export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(122,31,46,0.25) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(201,168,76,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(26,26,60,0.6) 0%, transparent 50%), linear-gradient(180deg, #07070f 0%, #0e0b1a 50%, #07070f 100%)',
        }}
      >
        {/* Decorative map lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(201,168,76,0.04) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(201,168,76,0.04) 80px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div
          className="inline-block border border-[rgba(201,168,76,0.18)] px-5 py-2 rounded-sm mb-8 bg-[rgba(201,168,76,0.06)] opacity-0 animate-fadeUp"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
          }}
        >
          Онлайн · Репетитор по истории
        </div>

        <h1
          className="mb-4 opacity-0 animate-fadeUp"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: 'var(--cream)',
            animationDelay: '0.4s',
            animationFillMode: 'forwards',
          }}
        >
          История
          <em className="block italic" style={{ color: 'var(--gold)' }}>
            без страха
          </em>
        </h1>

        <p
          className="max-w-2xl mx-auto mb-10 opacity-0 animate-fadeUp"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--cream-dim)',
            lineHeight: 1.8,
            animationDelay: '0.6s',
            animationFillMode: 'forwards',
          }}
        >
          Ваш ребёнок боится исторических дат, путается в эпохах и не знает, с
          какой стороны подойти к ЕГЭ? Этот курс превратит историю из страшного
          предмета в увлекательное путешествие сквозь века.
        </p>

        <a
          href="#enroll"
          className="inline-block px-11 py-4 rounded-sm shadow-[0_4px_30px_rgba(201,168,76,0.3)] transition-all duration-300 hover:shadow-[0_6px_40px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 opacity-0 animate-fadeUp"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            color: 'var(--bg-deep)',
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
            animationDelay: '0.8s',
            animationFillMode: 'forwards',
          }}
        >
          Записаться на курс
        </a>

        {/* Ornament */}
        <div
          className="flex items-center gap-4 max-w-xs mx-auto my-6 opacity-0 animate-fadeUp"
          style={{
            color: 'var(--gold-dim)',
            fontSize: '1.2rem',
            animationDelay: '1s',
            animationFillMode: 'forwards',
          }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--gold-dim)]" />
          ⚜
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--gold-dim)]" />
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fadeUp"
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          fontFamily: 'var(--font-cinzel)',
          textTransform: 'uppercase',
          animationDelay: '1.4s',
          animationFillMode: 'forwards',
        }}
      >
        <div
          className="w-px h-10 bg-gradient-to-b from-[var(--gold-dim)] to-transparent animate-scrollPulse"
          style={{
            animationDelay: '1.6s',
          }}
        />
        Узнать больше
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.3;
            transform: scaleY(0.6);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-scrollPulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
