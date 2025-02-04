import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Brana Software Solution",
    position: "Fullstack Developer",
    time: "Oct 2024 - ",
    location: "Addis Ababa, Ethiopia",
    description:
      "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
    tech: [
      "Next js",
      "React",
      "Tailwind",
      "Git",
      "Github",
      "Zustand",
      "Framer",
      "Node js",
      "Express js",
      "My SQL",
    ],
  },
];
