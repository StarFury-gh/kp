import { Link } from "react-router-dom";

interface BrandLogoProps {
  compact?: boolean;
}

function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/icons/LogoMark.svg" alt="Логотип PCCRAFT" />
      <span
        className={`text-2xl font-bold ${compact ? "hidden sm:inline" : ""}`}
      >
        <span className="text-primary">PC</span>
        <span className="text-accent">CRAFT</span>
      </span>
    </Link>
  );
}

export default BrandLogo;
