import  { useEffect, useRef, useState } from "react";

import styles from "./Certificates.module.css"; // ✅ scoped CSS

import isl from "../../assets/ISL-INDIA.jpg";
import Blc from "../../assets/bLOCKCHAIN.jpg";
import CloudComputing from "../../assets/Cloud-computing.jpg";
import code from "../../assets/CodeVita12.jpg";
import imb from "../../assets/Coursera-IBM-ML.jpg";
import data from "../../assets/dataScienceClub.jpg";
import gov from "../../assets/Government-actie.jpg";
import UIUX from "../../assets/MERN-Ethnus.jpg";
import Postman from "../../assets/Postman1.jpg";
import market from "../../assets/marketing-analysics.jpg";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificatesData = [
  { id: 1, title: "Indian Space Lab", image: isl },
  { id: 2, title: "BlockChain-Ethnus", image: Blc },
  { id: 3, title: "NPTEL Cloud Computing", image: CloudComputing },
  { id: 4, title: "CodeVita-Session-12", image: code },
  { id: 5, title: "Coursera-IBM-ML", image: imb },
  { id: 6, title: "MERN-Ethnus", image: UIUX },
  { id: 7, title: "Data Science Club", image: data },
  { id: 8, title: "Government Actie", image: gov },
  { id: 9, title: "Postman", image: Postman },
  { id: 10, title: "Marketing Analytics", image: market }

];

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay
  useEffect(() => {
    const resetTimeout = () => timeoutRef.current && clearTimeout(timeoutRef.current);
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === certificatesData.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => resetTimeout();
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificatesData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificatesData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.certSection} id="certifications">
      <h2 className={styles.title}>My Certifications</h2>

      <div className={styles.carousel}>
        {certificatesData.map((cert, idx) => (
          <div
            key={cert.id}
            className={`${styles.slide} ${
              idx === currentIndex ? styles.active : ""
            }`}
          >
            <img src={cert.image} alt={cert.title} className={styles.image} />
            <p className={styles.caption}>{cert.title}</p>
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
        {certificatesData.map((_, idx) => (
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
