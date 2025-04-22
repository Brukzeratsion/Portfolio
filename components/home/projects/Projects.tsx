import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import Apple from "@/public/project-imgs/Apple.png";
import Netflix from "@/public/project-imgs/Netflix.png";
import Amazon from "@/public/project-imgs/Amazon.png";
import Evangadi from "@/public/project-imgs/EvangadiForum.png";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Apple Clone",
    imgSrc: Apple,
    code: "https://github.com/Brukzeratsion",
    projectLink: "",
    tech: ["React"],
    description: "Apple Clone.",
    modalContent: (
      <>
        <p></p>
        <p></p>
      </>
    ),
  },
  {
    title: "Netflix clone",
    imgSrc: Netflix,
    code: "https://github.com/Brukzeratsion",
    projectLink: "https://brukzeratsion.github.io/Netflix-Clone/",
    tech: ["React", "Material Ui"],
    description: "Netflix clone",
    modalContent: <></>,
  },
  {
    title: "Amazon Clone",
    imgSrc: Amazon,
    code: "https://github.com/Brukzeratsion",

    projectLink: "https://amazonclonebz.netlify.app/",
    tech: ["React", "Firebase", "MySQL", "Nodejs"],
    description: "Amazon Clone.",
    modalContent: <></>,
  },
  {
    title: "Evangadi Forum",
    imgSrc: Evangadi,
    code: "https://www.github.com",
    projectLink: "https://evangadiforumclient2.netlify.app",
    tech: ["React", "Nodejs", "MySQL"],
    description: "A Forum where everybody can ask question as well as answer",
    modalContent: <></>,
  },
];
