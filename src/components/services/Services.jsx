import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: { opacity: 0, y: 100, x: -500 },
    animate: { opacity: 1, y: 0, x:0, transition: { duration: 1, staggerChildren: 0.1 } },
}
const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { once: true, margin: "-100px" });
    // The `once: true` option ensures that the animation only plays once when the element comes into view.
  return (
    <motion.div className='services' variants={variants} initial="initial" 
    // animate="animate" 
    // whileInView="animate" 
    animate={isInView && "animate"} 
    ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on building scalable Microservices
                <br />
                based on Sockets and REST API's using 
                <br />
                <span> Node.js</span>, and
                <span> Express.js</span>,
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{ color: "orange" }}>
                    Unique{" "}
                    </motion.b> 
                    Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{ color: "orange" }}>
                    For Your{" "}
                    </motion.b> 
                    Business
                </h1>
                <button>
                    WHAT WE DO
                </button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {Array.from({ length: 4 }).map((_, index) => (
                <motion.div whileHover={{ background:"lightgray", color: "black"}} key={index} className="box">
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum consequatur, deleniti quis dolorum nesciunt asperiores fuga eum voluptatem porro, architecto atque. In, nesciunt fugit!
                </p>
                <button>Go</button>
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services