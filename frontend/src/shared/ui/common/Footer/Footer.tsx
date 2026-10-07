import { Link } from "react-router-dom";

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

function Footer() {
  return (
    <footer className="bg-(--bg-primary)">
      <nav className="">
        <div className="grid grid-cols-3 ">
          {NavLinks.map((link) => (
            <Link className="text-tsecondary text-center" to={link.to}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
