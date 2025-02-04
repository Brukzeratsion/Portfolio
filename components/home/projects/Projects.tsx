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
    imgSrc: "/project-imgs/Apple.jpeg",
    code: "https://github.com/Brukzeratsion",
    projectLink: "#",
    tech: ["React"],
    description: "Apple Clone.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components and base layout from a mock-up.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom tailwind components,
          connected to a Prisma backend.
        </p>
      </>
    ),
  },
  {
    title: "Netflix clone",
    imgSrc: "/project-imgs/Netflix.jpg",
    code: "https://github.com/Brukzeratsion",
    projectLink: "https://elancerz.com/",
    tech: ["React","Material Ui"],
    description:
      "Netflix clone",
    modalContent: (
      <>
        
      </>
    ),
  },
  {
    title: "Amazon Clone",
    imgSrc: "/project-imgs/Amazon.jpg",
    code: "https://github.com/Brukzeratsion",
    
    projectLink: "https://amazonclonebz.netlify.app/",
    tech: ["React", "Firebase", "MySQL", "Nodejs"],
    description:
      "Amazon Clone.",
    modalContent: (
      <>
        
         
      </>
    ),
  },
  {
    title: "Evangadi Forum",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://www.github.com",
    projectLink:
      "https://evangadiforumclient2.netlify.app",
    tech: ["React", "Nodejs","MySQL"],
    description:
      "A Forum where everybody can ask question as well as answer",
    modalContent: (
      <>
        
      </>
    ),
  },
  
];
