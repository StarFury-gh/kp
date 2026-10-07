import { NavLink } from "react-router-dom";

interface NavLink {
  title: string;
  to: string;
}

const NavLinks: NavLink[] = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "Конструктор",
    to: "/constructor",
  },
  {
    title: "Каталог",
    to: "/catalog",
  },
  {
    title: "О нас",
    to: "about",
  },
  {
    title: "Войти",
    to: "/login",
  },
];

function getLinkClass(active: boolean) {
  const baseClass = "px-4 active:text-primary transition-colors duration-200";
  if (active) {
    return `${baseClass} text-primary border-b-2 border-primary`;
  }

  return `text-white ${baseClass}`;
}

function Header() {
  return (
    <header className="flex flex-row justify-between bg-(--bg-primary) p-4 border-b-2 border-primary/50">
      <h2 className="text-primary text-2xl font-bold">
        PC<span className="text-accent">CRAFT</span>
      </h2>
      {/* навигационные ссылки */}
      <nav>
        <ul>
          {NavLinks.map((link) => (
            <NavLink
              className={({ isActive }) => getLinkClass(isActive)}
              to={link.to}
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
