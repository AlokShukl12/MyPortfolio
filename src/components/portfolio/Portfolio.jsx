import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  
  {
    id: 1,
    img: "/p2.jpg",
    title: "Elite-Mart Product Management System",
    desc: " Elite-Mart is a modern e-commerce platform built with ReactJS, NodeJS, MongoDB, and Tailwind CSS. It integrates Stripe for secure payment processing and Cloudinary for efficient image management. Designed for smooth user experiences, it ensures responsive design, fast transactions, and scalable architecture—ideal for tech-driven, customer-focused online retail solutions.",
    link: "https://elite-mart-blush.vercel.app/",
  },
  {
    id: 2,
    img: "/p3.jpg",
    title: "Animated Portfolio Website",
    desc: " Developed a personal portfolio using ReactJS with smooth animations powered by Framer Motion also using Three.js. Integrated a functional contact form using EmailJS for seamless communication and user interaction.",
    link: "https://alokshuklaportfolio.vercel.app/",
  },
  {
    id: 3,
    img: "/p4.jpg",
    title: "Wanderlust Hotel Booking Website",
    desc: " Developed a professional hotel booking website enabling users to search available rooms and make secure payments via Stripe. Built with HTML, CSS, and JavaScript, ensuring responsive design and smooth user experience. Hosted on Render for reliable deployment and performance. Focused on functionality, security, and user-centric interface design.",
    link: "https://wander-llr4.onrender.com/listings",
  },
  {
    id: 4,
    img: "/p1.jpg",
    title: "Agriculture Products Application",
    desc: " A web platform built with TypeScript, Tailwind CSS, ReactJS, Context-API, and Graph Map, designed to sell, manage, and visualize agriculture-related products.",
    link: "https://agro-aim-store.vercel.app/",
  },
  {
    id: 1,
    img: "/p5.jpg",
    title: "React Portfolio Website",
    desc: " Developed a personal portfolio using ReactJS with smooth animations powered by Framer Motion. Integrated a functional contact form using EmailJS for seamless communication and user interaction.",
    link: "https://my-portfolio-k6r2.vercel.app/",
  },
 
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
   
    <div className="pItem" ref={ref}>
    
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
        
      <motion.div className="pList" style={{ x: xTranslate }}>
        
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
