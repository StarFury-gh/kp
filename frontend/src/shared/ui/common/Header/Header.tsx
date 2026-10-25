import { Link, NavLink, useNavigate } from "react-router-dom";

import BrandLogo from "../BrandLogo";
import Button from "../Button";

interface HeaderLink {
  title: string;
  to?: string;
}

const NavLinks: HeaderLink[] = [
  { title: "Каталог", to: "/catalog" },
  { title: "Собрать ПК", to: "/constructor" },
  { title: "О нас" },
  { title: "Поддержка" },
];

function getLinkClass(active: boolean) {
  const baseClass = "text-sm transition-colors duration-200";
  if (active) {
    return `${baseClass} text-primary`;
  }

  return `text-tprimary hover:text-primary ${baseClass}`;
}

function Header({ cartCount = 0 }: { cartCount?: number }) {
  const navigate = useNavigate();

  return (
    <header className="flex h-[88px] w-full items-center justify-between border-b border-border bg-bg-sec px-6 md:px-12 lg:px-16">
      <BrandLogo />

      {/* навигационные ссылки */}
      <nav>
        <ul className="flex gap-10">
          {NavLinks.map((link) =>
            link.to ? (
              <li key={link.title}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {link.title}
                </NavLink>
              </li>
            ) : (
              <li key={link.title}>
                <span className={`${getLinkClass(false)} cursor-pointer`}>
                  {link.title}
                </span>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <Link to="/cart" className="flex items-center gap-2">
          <img src="/icons/CartIcon.svg" alt="Корзина" />
          <span className="font-mono text-xs text-primary">{cartCount}</span>
        </Link>
        <Button variant="secondary" onClick={() => navigate("/login")}>
          Войти
        </Button>
      </div>
    </header>
  );
}

export default Header;
