import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

const heroParagraphs = [
  "Подбираем комплектующие под игры, работу и творчество.",
  "Выберите процессор, видеокарту, память и корпус — и соберите систему под свои задачи.",
  "Все в одном месте, без лишних обещаний и с понятными характеристиками.",
];

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
      <div className="flex flex-1 flex-col items-start gap-8">
        {/* маркер секции */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 bg-primary" />
          <p className="font-mono text-xs text-tsecondary">01 / 04</p>
        </div>

        <h1 className="heading-xl">Твой ПК. Твоя конфигурация.</h1>

        <div className="flex max-w-[416px] flex-col gap-2 text-tsecondary">
          <p className="text-base">{heroParagraphs[0]}</p>
          <p className="text-sm">{heroParagraphs[1]}</p>
          <p className="text-sm">{heroParagraphs[2]}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button onClick={() => navigate("/constructor")}>Собрать ПК</Button>
          <Button variant="secondary" onClick={() => navigate("/catalog")}>
            Смотреть каталог
          </Button>
        </div>
      </div>

      {/* иллюстрация-карточка */}
      <div className="flex w-full max-w-[576px] flex-col gap-4 rounded-2xl border border-border bg-bg-sec p-6 lg:w-[576px]">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-start gap-2">
            <div className="size-2 rounded-lg bg-primary" />
            <div className="size-2 rounded-lg bg-border" />
            <div className="size-2 rounded-lg bg-border" />
          </div>
          <p className="text-sm text-tsecondary">01 — 06</p>
        </div>

        <img
          src="/photos/hero-pc.jpg"
          alt="Игровой системный блок"
          className="h-72 w-full rounded-lg object-cover"
        />

        <div className="flex w-full items-start justify-between">
          <p className="min-w-32 text-sm text-tsecondary">
            Игровой системный блок
          </p>
          <p className="font-mono text-xs text-primary">01 — 06</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
