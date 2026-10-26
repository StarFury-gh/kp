import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

function AboutHeroSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-1 flex-col items-start gap-8">
        {/* маркер секции */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 bg-primary" />
          <p className="font-mono text-xs text-tsecondary">01 / 04</p>
        </div>

        <h1 className="heading-xl">Компьютер начинается с идеи</h1>

        <div className="flex max-w-[448px] flex-col gap-2">
          <p className="text-base text-tprimary">
            Контур ПК — концепт сервиса для тех, кто хочет разобраться в
            комплектующих и собрать компьютер под свои задачи.
          </p>
          <p className="text-sm text-tsecondary">
            Сравнивайте характеристики, сохраняйте варианты и выбирайте
            комплектующие под свои задачи.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button onClick={() => navigate("/catalog")}>Смотреть каталог</Button>
          <Button variant="secondary" onClick={() => navigate("/constructor")}>
            Собрать ПК
          </Button>
        </div>
      </div>

      {/* фото мастерской */}
      <div className="w-full overflow-hidden rounded-2xl border border-border lg:w-[576px]">
        <img
          src="/photos/about-workshop.jpg"
          alt="Мастерская по сборке компьютеров"
          className="h-72 w-full object-cover lg:h-[376px]"
        />
      </div>
    </section>
  );
}

export default AboutHeroSection;
