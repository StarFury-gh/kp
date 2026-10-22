import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";

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
];

function getLinkClass(active: boolean) {
  const baseClass = "px-4 active:text-primary transition-colors duration-200";
  if (active) {
    return `${baseClass} text-primary border-b-2 border-primary`;
  }

  return `text-white ${baseClass}`;
}

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row items-center justify-between bg-(--bg-secondary) py-6 px-12">
      <div className="flex flex-row gap-3">
        <img src="/icons/Box.svg" alt="" />
        <h2 className="text-primary text-2xl font-bold">
          PC<span className="text-accent">CRAFT</span>
        </h2>
      </div>
      {/* навигационные ссылки */}
      <nav>
        <ul>
          {NavLinks.map((link, idx) => (
            <NavLink
              key={idx}
              className={({ isActive }) => getLinkClass(isActive)}
              to={link.to}
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row gap-3">
        <NavLink to="/cart" className="flex items-center">
          <img src="/icons/Cart.svg" alt="" />
        </NavLink>
        <Button onClick={() => navigate("/login")}>Войти</Button>
      </div>
    </header>
  );
}

export default Header;
