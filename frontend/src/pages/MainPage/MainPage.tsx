import {
  AdvantagesSection,
  CategoriesSection,
  CtaSection,
  FeaturedSection,
  HeroSection,
} from "./sections";

function MainPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <AdvantagesSection />
      <CtaSection />
    </div>
  );
}

export default MainPage;
