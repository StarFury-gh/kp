import GearIcon from "@/shared/ui/common/Icons/GearIcon";
import ChartIcon from "@/shared/ui/common/Icons/ChartIcon";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function AdvantageCard({ title, description, icon }: AdvantageCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-bg-sec">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-tprimary text-center">
        {title}
      </h3>
      <p className="text-tsecondary text-center">{description}</p>
    </div>
  );
}

function AdvantagesSection() {
  const advantages: AdvantageCardProps[] = [
    {
      title: "Безопасность",
      description: "Заглушка описания преимущества безопасности",
      icon: <img src="/icons/shield.svg" alt="" className="w-8" />,
    },
    {
      title: "Скорость",
      description: "Заглушка описания преимущества скорости",
      icon: <img src="/icons/rocket.svg" alt="" className="w-8" />,
    },
    {
      title: "Гибкость",
      description: "Заглушка описания преимущества гибкости",
      icon: <GearIcon />,
    },
    {
      title: "Аналитика",
      description: "Заглушка описания преимущества аналитики",
      icon: <ChartIcon />,
    },
  ];

  return (
    <section className="flex flex-col gap-8 p-12">
      <h2 className="text-3xl font-bold text-tprimary text-center">
        Преимущества использования сервиса
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((adv) => (
          <AdvantageCard key={adv.title} {...adv} />
        ))}
      </div>
    </section>
  );
}

export default AdvantagesSection;
