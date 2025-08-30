import { useEffect, useState, useRef } from "react";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import ReactJs from "../../assets/react.png";
import NodeJs from "../../assets/node.png";
import ExpressJs from "../../assets/expressjs.png";
import MongoDB from "../../assets/mongo.png";
import GitHub from "../../assets/github.png";
import Linux from "../../assets/tailwind.png";
import Hostinger from "../../assets/typescript.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Skills.module.css";

// Define proficiency levels
const proficiencyLevels = {
  BASIC: { percentage: 40, label: "Basic" },
  INTERMEDIATE: { percentage: 65, label: "Intermediate" },
  ADVANCED: { percentage: 85, label: "Advanced" },
  EXPERT: { percentage: 95, label: "Expert" },
};

const skillsData = [
  { id: 1, img: Html, name: "HTML", level: proficiencyLevels.ADVANCED },
  { id: 2, img: Css, name: "CSS", level: proficiencyLevels.ADVANCED },
  { id: 3, img: Javascript, name: "JavaScript", level: proficiencyLevels.EXPERT },
  { id: 4, img: ReactJs, name: "React JS", level: proficiencyLevels.INTERMEDIATE },
  { id: 5, img: NodeJs, name: "Node JS", level: proficiencyLevels.EXPERT },
  { id: 6, img: ExpressJs, name: "Express JS", level: proficiencyLevels.EXPERT },
  { id: 7, img: MongoDB, name: "MongoDB", level: proficiencyLevels.EXPERT },
  { id: 8, img: GitHub, name: "GitHub", level: proficiencyLevels.EXPERT },
  { id: 9, img: Linux, name: "Tailwind CSS", level: proficiencyLevels.ADVANCED },
  { id: 10, img: Hostinger, name: "TypeScript", level: proficiencyLevels.ADVANCED },
];

export const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay
  useEffect(() => {
    const resetTimeout = () => timeoutRef.current && clearTimeout(timeoutRef.current);
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === skillsData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? skillsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === skillsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.skillSection} id="skills">
      <h2 className={styles.title}>My Skills</h2>
      <h3>A curated showcase of the key technologies and tools I specialize in, <br /> reflecting my current expertise and proficiency.</h3>

      <div className={styles.carousel}>
        {skillsData.map((skill, idx) => (
          <div
            key={skill.id}
            className={`${styles.slide} ${idx === currentIndex ? styles.active : ""}`}
          >
            <div className={styles.card}>
              <img src={skill.img} alt={skill.name} className={styles.icon} />
              <h3 className={styles.name}>{skill.name}</h3>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level.percentage}%` }}
                />
              </div>
              <p className={styles.level}>{skill.level.label}</p>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button className={`${styles.navBtn} ${styles.left}`} onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
        <button className={`${styles.navBtn} ${styles.right}`} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {skillsData.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};
