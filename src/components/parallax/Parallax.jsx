import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] // This means the animation starts when the top of the element reaches the top of the viewport and ends when the bottom of the element reaches the top of the viewport
    });

    const yText = useTransform(scrollYProgress, 
        // Map the scroll progress from this position to
        [0, 1], // 0 means the start of the scroll, 1 means the end of the scroll
        // to this position
        ["0%", "500%"]//0% means the background is at the top, 100% means the background is at the bottom, changing 100% to 500% changes the speed
    );
    const yBg = useTransform(scrollYProgress, 
        // Map the scroll progress from this position to
        [0, 1], // 0 means the start of the scroll, 1 means the end of the scroll
        // to this position
        ["0%", "100%"]//0% means the background is at the top, 100% means the background is at the bottom, changing 100% to 500% changes the speed
    );
  return (
    <div 
    className="parallax" 
    style={{background: `${type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}`}}
    ref={ref}
    >
        <motion.h1 style={{ y: yText}}>{type === "services" ? "What I Do" : "What I Did"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div 
        className="planets" 
        style={{
            y: yBg, 
            backgroundImage: `url(
                ${type === "services" ? "./planets.png" : "./sun.png"}
                )`
            }}
        >
        </motion.div>
        <motion.div className="stars" style={{ x: yBg}}></motion.div>
    </div>
  )
}

export default Parallax