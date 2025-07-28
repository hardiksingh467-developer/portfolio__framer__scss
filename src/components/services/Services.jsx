import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: { opacity: 0, y: 100, x: -500 },
    animate: { opacity: 1, y: 0, x:0, transition: { duration: 1, staggerChildren: 0.1 } },
}
const Services = () => {
    const ref = useRef();

    const items = [
        { title: "Full-Stack Web Development", description: "Build scalable apps using MERN stack, combining powerful backend services with seamless frontend UIs." },
        { title: "Backend Microservices", description: "Design REST APIs with Node.js, Express, and Kafka, implementing role-based access control and clean service architecture." },
        { title: " Frontend Engineering", description: "Develop fast, responsive UIs using React, Redux, and Tailwind. Optimize performance through lazy loading and image compression." },
        { title: "Real-Time Communication", description: "Specialized in WebRTC: built custom video call apps with MongoDB and MySQL support for real-time, peer-to-peer connections." },
    ]

    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isMobile = window.innerWidth <= 768;
    // The `once: true` option ensures that the animation only plays once when the element comes into view.
  return (
    <motion.div className='services' variants={variants} initial="initial" 
    // animate="animate" 
    // whileInView="animate" 
    // animate={isInView && "animate"} 
    animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
    ref={ref}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on building scalable Microservices
                <br />
                based on Sockets and REST API&apos;s using 
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
                    WHAT I DO
                </button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {items.map((item, index) => (
                <motion.div whileHover={{ background:"lightgray", color: "black"}} key={index} className="box">
                <h2>{item.title}</h2>
                <p>
                    {item.description}
                </p>
                {/* send to contact us */}
                <button onClick={() => handleScroll("contact")}>Go</button>
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services