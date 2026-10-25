interface Advantage {
  index: string;
  title: string;
  icon: string;
  paragraphs: string[];
}

const advantages: Advantage[] = [
  {
    index: "01",
    title: "Под ваши задачи",
    icon: "/icons/AdvantageCheck.svg",
    paragraphs: [
      "Выбираем комплектующие под игры, работу и творчество.",
      "От базовой сборки до мощной рабочей станции.",
    ],
  },
  {
    index: "02",
    title: "Понятные характеристики",
    icon: "/icons/AdvantageCubes.svg",
    paragraphs: [
      "Ядра, потоки, частоты и объём памяти — всё в одном месте.",
      "Без лишних обещаний и технического шума.",
    ],
  },
  {
    index: "03",
    title: "Сохранённые сборки",
    icon: "/icons/AdvantagePlus.svg",
    paragraphs: [
      "Соберите конфигурацию и вернитесь к ней позже.",
      "Удобно сравнивать варианты и дорабатывать состав.",
    ],
  },
  {
    index: "04",
    title: "Всё в одном месте",
    icon: "/icons/AdvantageArrow.svg",
    paragraphs: [
      "Процессоры, видеокарты, память и корпуса — в одной витрине.",
      "Быстрый просмотр, сравнение и переход к сборке.",
    ],
  },
];

function AdvantageCard({ advantage }: { advantage: Advantage }) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border p-6">
      <div className="flex items-start justify-between">
        <img src={advantage.icon} alt="" />
        <span className="font-mono text-xs text-tsecondary">
          {advantage.index}
        </span>
      </div>
      <p className="text-xl text-tprimary">{advantage.title}</p>
      <div className="flex flex-col gap-2 text-sm text-tsecondary">
        {advantage.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function AdvantagesSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="heading-lg">Всё для продуманной сборки</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {advantages.map((advantage) => (
          <AdvantageCard key={advantage.index} advantage={advantage} />
        ))}
      </div>
    </section>
  );
}

export default AdvantagesSection;
