import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavLink {
  title: string;
  to: string;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function FooterLink({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className: string;
}) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleClick = () => {
    if (to.startsWith("mailto:") || to.startsWith("tel:")) return;
    scrollToTop();
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

const NavLinks: NavLink[] = [
  { title: "Главная", to: "/" },
  { title: "Конструктор", to: "/constructor" },
  { title: "Каталог", to: "/catalog" },
  { title: "О нас", to: "about" },
  { title: "Войти", to: "/login" },
];

const FooterLinks = [
  {
    title: "Навигация",
    links: NavLinks,
  },
  {
    title: "Информация",
    links: [
      { title: "Политика конфиденциальности", to: "/privacy" },
      { title: "Условия использования", to: "/terms" },
      { title: "Публичная оферта", to: "/offer" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { title: "support@example.com", to: "mailto:support@example.com" },
      { title: "+7 (800) 123-45-67", to: "tel:+78001234567" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-(--bg-primary) text-(--text-secondary)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <FooterLink
              to="/"
              className="text-lg font-semibold text-(--text-primary)"
            >
              PCCraft
            </FooterLink>
            <p className="max-w-md text-sm leading-relaxed text-(--text-secondary)">
              Современный онлайн-конструктор для создания уникальных решений.
              Простой интерфейс, мощные инструменты и широкий каталог
              возможностей для реализации ваших идей.
            </p>
          </div>

          {/* Links columns */}
          {FooterLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-(--text-primary)">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <FooterLink
                      to={link.to}
                      className="text-sm transition-colors duration-200 hover:text-(--text-primary)"
                    >
                      {link.title}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-(--border-color) pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-(--text-secondary)">
              &copy; {new Date().getFullYear()} Название проекта. Все права
              защищены.
            </p>
            <p className="text-xs text-(--text-secondary)">
              Создано с любовью для наших пользователей
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
