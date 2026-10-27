import { useEffect, useState } from "react";

const SLIDE_DELAY = 5;

interface HeroSlide {
  id: string;
  title: string;
  photo: string;
}

const slides: HeroSlide[] = [
  {
    id: "hero-1",
    title: "Игровой системный блок",
    photo: "/photos/hero-pc.jpg",
  },
  {
    id: "hero-2",
    title: "Системный блок для работы с графикой",
    photo: "/photos/hero-pc.jpg",
  },
  {
    id: "hero-3",
    title: "Системный блок для повседневной работы",
    photo: "/photos/hero-pc.jpg",
  },
];

function padNumber(value: number) {
  return String(value).padStart(2, "0");
}

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_DELAY * 1000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="w-full max-w-[576px] lg:w-[576px]"
      aria-roledescription="carousel"
      aria-label="Демонстрационные сборки ПК"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-sec p-6">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-start gap-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="-m-1 flex size-4 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Перейти к слайду ${index + 1}`}
                  aria-current={isActive}
                >
                  <span
                    className={`size-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary" : "bg-border hover:bg-tsecondary"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <p className="text-sm text-tsecondary">
            {padNumber(activeIndex + 1)} — {padNumber(slides.length)}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <div
            className="hero-slider-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className="flex w-full shrink-0 flex-col gap-4"
                aria-roledescription="slide"
                aria-label={`Слайд ${index + 1} из ${slides.length}`}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={slide.photo}
                  alt={slide.title}
                  className="h-72 w-full rounded-lg object-cover"
                />
                <div className="flex w-full items-start justify-between">
                  <p className="min-w-32 text-sm text-tsecondary">
                    {slide.title}
                  </p>
                  <p className="font-mono text-xs text-primary">
                    {padNumber(index + 1)} — {padNumber(slides.length)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Предыдущий слайд"
            className="cursor-pointer absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-tprimary backdrop-blur-sm transition-colors hover:bg-bg-sec-hover hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-5"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Следующий слайд"
            className="cursor-pointer absolute top-1/2 right-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/70 text-tprimary backdrop-blur-sm transition-colors hover:bg-bg-sec-hover hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-5"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
