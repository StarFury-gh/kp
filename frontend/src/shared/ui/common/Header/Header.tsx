import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import BrandLogo from "../BrandLogo";
import Button from "../Button";

interface HeaderLink {
  title: string;
  to?: string;
}

/* Навигация. Пункты без маршрута пока отображаются как заглушки */
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

function BurgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="#E0E0E0" strokeWidth="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18M18 6L6 18" stroke="#E0E0E0" strokeWidth="1.5" />
    </svg>
  );
}

function Header({ cartCount = 0 }: { cartCount?: number }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 flex h-[88px] w-full items-center justify-between border-b border-border bg-bg-sec px-6 md:px-12 lg:px-16">
      <BrandLogo compact />

      {/* навигационные ссылки (десктоп) */}
      <nav className="hidden md:block">
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

      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/cart" className="flex items-center gap-2">
          <img src="/icons/CartIcon.svg" alt="Корзина" />
          <span className="font-mono text-xs text-primary">{cartCount}</span>
        </Link>
        <Button variant="secondary" onClick={() => navigate("/login")}>
          Войти
        </Button>

        {/* бургер (мобильные) */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/50 md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      {/* подложка: тап вне меню закрывает его */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-[88px] bottom-0 z-40 bg-tblack/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* мобильное меню */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-b border-border bg-bg-sec px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col">
            {NavLinks.map((link) =>
              link.to ? (
                <li key={link.title}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-tprimary hover:bg-tprimary/5"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ) : (
                <li key={link.title}>
                  <span
                    onClick={closeMenu}
                    className="block cursor-pointer rounded-lg px-3 py-3 text-sm text-tprimary"
                  >
                    {link.title}
                  </span>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
