import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "WebRTC Video Calling App",
    description:
      "A real-time video calling application built using WebRTC, React, Node.js, and Socket.IO. Supports peer-to-peer communication with video, audio, and text chat functionality. Ideal for one-to-one meetings, interviews, or virtual hangouts.",
    img: "./Screenshot (44).png",
    link: "https://webrtc-frontend-c7so.onrender.com/",
  },
  {
    id: 2,
    title: "Google Docs Clone",
    description:
      "A collaborative text editor inspired by Google Docs, developed using React, Node.js, Express, and WebSocket. Enables multiple users to edit the same document in real-time with persistent storage via MongoDB.",
    img: "./Screenshot (47).png",
    link: "https://google-docs-frontend.onrender.com/",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A fully-featured e-commerce platform allowing users to browse, search, and purchase products. Includes user authentication, product management, and order tracking. Built with MERN stack and integrated with Stripe for secure payments.",
    img: "./Screenshot (48).png",
    link: "https://ecommerce-clone-frontend-pvh7.onrender.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="single">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank">
              <button>See Demo</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // restDelta: 0.001
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
