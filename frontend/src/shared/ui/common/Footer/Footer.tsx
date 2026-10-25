import { Link } from "react-router-dom";

import BrandLogo from "../BrandLogo";

interface FooterLink {
  title: string;
  to: string;
}

const FooterColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Каталог",
    links: [
      { title: "Процессоры", to: "/catalog" },
      { title: "Материнские платы", to: "/catalog" },
      { title: "Охлаждение", to: "/catalog" },
      { title: "Корпуса", to: "/catalog" },
    ],
  },
  {
    title: "Покупателям",
    links: [
      { title: "Доставка", to: "#" },
      { title: "Оплата", to: "#" },
      { title: "Поддержка", to: "#" },
      { title: "FAQ", to: "#" },
    ],
  },
  {
    title: "Компания",
    links: [
      { title: "О нас", to: "#" },
      { title: "Контакты", to: "#" },
      { title: "Личный кабинет", to: "/account" },
      { title: "Политика", to: "#" },
    ],
  },
];

const SocialButtons = ["VK", "TG", "Дзен"];

function Footer() {
  return (
    <footer className="flex w-full flex-col gap-10 border-t border-border bg-bg-sec px-6 pb-8 pt-12 md:px-12 lg:px-16">
      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        {/* брендовая колонка */}
        <div className="flex flex-1 flex-col gap-6">
          <BrandLogo />
          <div className="flex max-w-48 flex-col gap-2 text-sm text-tsecondary">
            <p>Комплектующие для компьютера под ваши задачи.</p>
            <p>Концепт магазина. Цены, команда и заказы — примеры.</p>
          </div>
        </div>

        {/* колонки ссылок */}
        {FooterColumns.map((column) => (
          <div key={column.title} className="flex flex-1 flex-col gap-4">
            <p className="text-base text-tprimary">{column.title}</p>
            <ul className="flex flex-col gap-4 text-sm text-tsecondary">
              {column.links.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.to}
                    className="transition-colors duration-200 hover:text-tprimary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* нижняя строка */}
      <div className="flex items-start justify-between border-t border-border pt-6">
        <p className="text-sm text-tsecondary">
          © {new Date().getFullYear()} PCCraft
        </p>
        <div className="flex gap-2">
          {SocialButtons.map((social) => (
            <a
              key={social}
              href="#"
              onClick={(event) => event.preventDefault()}
              className="flex h-8 w-12 items-center justify-center rounded-lg border border-border text-xs text-tprimary"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
