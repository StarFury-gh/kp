import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

function CtaSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-start gap-8 rounded-2xl border border-primary bg-bg-sec p-10 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-col gap-6">
        <h2 className="heading-lg">Начни со своей конфигурации</h2>
        <div className="flex max-w-[400px] flex-col gap-2 text-sm text-tsecondary">
          <p>
            Выберите процессор, видеокарту и другие компоненты под свои задачи.
          </p>
          <p>Соберите систему, сравните варианты и добавьте всё в корзину.</p>
        </div>
      </div>
      <Button onClick={() => navigate("/constructor")}>Собрать ПК</Button>
    </section>
  );
}

export default CtaSection;
