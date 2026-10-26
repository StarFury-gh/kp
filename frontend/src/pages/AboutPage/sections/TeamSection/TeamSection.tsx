interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
  alt: string;
}

const Team: TeamMember[] = [
  {
    name: "Алексей Морозов",
    role: "Инженер по сборке",
    description:
      "Собирает конфигурации, проверяет совместимость и подбирает оптимальные комплекты.",
    photo: "/photos/team-aleksey.jpg",
    alt: "Алексей Морозов — инженер по сборке",
  },
  {
    name: "Анна Лебедева",
    role: "Специалист по комплектующим",
    description:
      "Проверяет характеристики, сравнивает модели и помогает выбрать лучший вариант.",
    photo: "/photos/team-anna.jpg",
    alt: "Анна Лебедева — специалист по комплектующим",
  },
  {
    name: "Дмитрий Волков",
    role: "Тестирование систем",
    description:
      "Проверяет стабильность, производительность и готовность системы к работе.",
    photo: "/photos/team-dmitry.jpg",
    alt: "Дмитрий Волков — тестирование систем",
  },
  {
    name: "Мария Соколова",
    role: "Поддержка клиентов",
    description:
      "Помогает разобраться с конфигурацией, ответить на вопросы и подобрать комплект.",
    photo: "/photos/team-maria.jpg",
    alt: "Мария Соколова — поддержка клиентов",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-border bg-bg-sec p-4">
      <img
        src={member.photo}
        alt={member.alt}
        className="h-[208px] w-full rounded-lg object-cover"
      />

      <div className="flex flex-col gap-4 px-2 pb-2">
        <p className="text-xl text-tprimary">{member.name}</p>
        <div className="flex flex-col gap-2 text-sm text-tsecondary">
          <p>{member.role}</p>
          <p>{member.description}</p>
        </div>
      </div>
    </article>
  );
}

function TeamSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="heading-lg">Люди за каждой сборкой</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>

      <p className="text-sm text-tsecondary">
        Команда представлена для демонстрации концепта. Это иллюстративные
        профили и не являются реальными сотрудниками.
      </p>
    </section>
  );
}

export default TeamSection;
