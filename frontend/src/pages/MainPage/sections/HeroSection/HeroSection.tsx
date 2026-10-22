import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-row justify-between items-center gap-8 p-12">
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold text-tprimary">
          Сделай собственную сборку
        </h1>
        <p className="text-lg text-tsecondary">
          Благодаря простому и понятному интерфейсу ты можешь создать свою
          уникальную сборку
        </p>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/constructor")}>Начать</Button>
          <Button variant="secondary">Подробнее</Button>
        </div>
      </div>
      <div className="flex-1 bg-bg-sec rounded-xl p-8 min-h-80 flex items-center justify-center">
        <p className="text-tsecondary text-center">
          Изображение / 3D-визуализация
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
