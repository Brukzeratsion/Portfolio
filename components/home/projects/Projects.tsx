import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

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
    imgSrc: "public/project-imgs/Apple.png",
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
    imgSrc: "public/project-imgs/Netflix.png",
    code: "https://github.com/Brukzeratsion",
    projectLink: "https://brukzeratsion.github.io/Netflix-Clone/",
    tech: ["React", "Material Ui"],
    description: "Netflix clone",
    modalContent: <></>,
  },
  {
    title: "Amazon Clone",
    imgSrc: "public/project-imgs/Amazon.png",
    code: "https://github.com/Brukzeratsion",

    projectLink: "https://amazonclonebz.netlify.app/",
    tech: ["React", "Firebase", "MySQL", "Nodejs"],
    description: "Amazon Clone.",
    modalContent: <></>,
  },
  {
    title: "Evangadi Forum",
    imgSrc: "public/project-imgs/EvangadiForum.png",
    code: "https://www.github.com",
    projectLink: "https://evangadiforumclient2.netlify.app",
    tech: ["React", "Nodejs", "MySQL"],
    description: "A Forum where everybody can ask question as well as answer",
    modalContent: <></>,
  },
];
