interface Stat {
  value: string;
  title: string;
  description: string;
}

const Stats: Stat[] = [
  {
    value: "6",
    title: "Категорий комплектующих",
    description: "От процессоров до корпусов — всё, чтобы собрать систему с нуля.",
  },
  {
    value: "12",
    title: "Товаров в демонстрационном каталоге",
    description: "Небольшой выбор для демонстрации структуры и карточек товаров.",
  },
  {
    value: "3",
    title: "Сценария: игры, работа, творчество",
    description: "Три базовых направления, по которым можно выбирать конфигурацию.",
  },
  {
    value: "1",
    title: "Место для вашей конфигурации",
    description: "Концепт показывает, как собрать компьютер под конкретные задачи.",
  },
];

function StatisticsSection() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {Stats.map((stat) => (
        <article
          key={stat.value}
          className="flex flex-col gap-6 rounded-xl border border-border bg-bg-sec p-8"
        >
          <p className="font-mono text-[40px] leading-[1.5] text-primary">
            {stat.value}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-base text-tprimary">{stat.title}</p>
            <p className="text-sm text-tsecondary">{stat.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default StatisticsSection;
