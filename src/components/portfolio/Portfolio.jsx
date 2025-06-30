import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi optio incidunt laboriosam mollitia odit possimus ad molestiae quasi vel veritatis esse, repellat blanditiis, accusamus deleniti cumque impedit cupiditate eum in et earum fugit ex?",
    img: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi optio incidunt laboriosam mollitia odit possimus ad molestiae quasi vel veritatis esse, repellat blanditiis, accusamus deleniti cumque impedit cupiditate eum in et earum fugit ex?",
    img: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi optio incidunt laboriosam mollitia odit possimus ad molestiae quasi vel veritatis esse, repellat blanditiis, accusamus deleniti cumque impedit cupiditate eum in et earum fugit ex?",
    img: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg",
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
            <button>See Demo</button>
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
