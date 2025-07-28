import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
  // scrollButton: {
  //     opacity: 0,
  //     y: 10,
  //     transition: {
  //         duration: 0.5,
  //         repeat: Infinity,
  //         repeatType: "mirror"
  //     }
  // }
};
// const ScrollDownButton = ({ targetId }) => {
//   return (
//     <>
//       <motion.img
//         variants={textVariants}
//         animate="scrollButton"
//         src="./scroll.png"
//         alt=""
//         className="scroller"
//         onClick={()=> handleScroll("services")}
//       />
//       {/* <button onClick={handleScroll} className="your-button-styles">
//                 <img src="./scroll.png" alt="" />
//             </button> */}
//     </>
//   );
// };

const Hero = () => {
  const handleScroll = (targetId) => {
    console.log("i'm hit");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARDIK SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Backend and Fullstack Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              onClick={() => handleScroll("services")}
              className="buttonsScroller"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              onClick={() => handleScroll("contact")}
              variants={textVariants}
              className="buttonsScroller"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            className="scroller"
            alt=""
            onClick={() => handleScroll("services")}
          />
          {/* <ScrollDownButton /> */}
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Middleware Database Controller Repo
      </motion.div>
      <div className="imageContainer">
        <img src="./hero__image__three.png" alt="alternate hero image" />
      </div>
    </div>
  );
};

export default Hero;
