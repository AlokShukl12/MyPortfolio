import { Canvas } from "@react-three/fiber";
import "./Hero.css";
import Speech from "./Speech";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const awardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Alok Shukla!</span>
        </motion.h1>

        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>MERN Developer</motion.h2>
          <motion.p variants={awardVariants}>
            I create stunning and interactive web applications using
            MERN(FULL-STACK).
          </motion.p>
          {/*
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
          */}
        </motion.div>

        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://drive.google.com/file/d/1n9MfD0qgemJhflZZDL-7bD0tu3cZC2oC/view?usp=sharing"
          >
            <img src="/resume.png" alt="resume" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/alokshukla895776/"
          >
            <img src="/linkdin.png" alt="linkedin" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://github.com/AlokShukl12"
          >
            <img src="/github.png" alt="github" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="instagram" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">PROFILE_LINKS!</div>
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.a>
      </div>

      <div className="bg">
        {/* 3d */}
        {isDesktop && (
          <Canvas>
            <Suspense fallback="loading.....">
              <Shape />
            </Suspense>
          </Canvas>
        )}
        {/*
        <Canvas>
          <Suspense fallback="loading.....">
            <Shape />
          </Suspense>
        </Canvas>
        */}
        <div className="hImg">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;