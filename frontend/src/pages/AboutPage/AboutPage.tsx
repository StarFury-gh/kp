import { AboutHeroSection, StatisticsSection, TeamSection } from "./sections";

function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <AboutHeroSection />
      <StatisticsSection />
      <TeamSection />
    </div>
  );
}

export default AboutPage;
