import {motion, stagger} from 'framer-motion';
import { useState } from 'react';

const Test = () => {

    // for complex animations we might need to create our variants
    const boxVariants = {
        visible: {opacity : 1},
        hidden: {opacity : 0},
    }

    // now we can pass this variable in the `variants` property of our div
    // we can say our initial property is hidden, initial: "hidden"
    // we can say our animate property is visible, animate: "visible"

    // lets create a state for conditional rendering of the animation
    const [isVisible, setIsVisible] = useState(false);

    const boxVariants2 = {
        visible: {opacity : 1, x: -150, transition: {duration: 1, type: "spring", stiffness: 1000, damping: 500}},
        hidden: {opacity : 0},
    }

    const items = [
        "item 1",
        "item 2",
        "item 3",
        "item 4"
    ]

    const listVariants = {
        // visible: {
        //     opacity: 1, 
        //     // x: 100, 
        //     transition: {
        //         staggerChildren: 0.5,
        //     }},
        // or we can assign custom speeds for each element
        visible: (i) => ({
            opacity: 1, 
            // x: 100, 
            transition: {
                delay: i * 0.5,
                // staggerChildren: i * 0.5,
            }}),
        hidden: {opacity: 0, x: 100},
    }
  return (
    <div className='course'>
        
        <motion.div className='box'
        // below property sets the initial state of the animation
        initial={{
            opacity: 0,
            scale: 0.5,
            // x: -100,
            // y: -100,
        }} 
        // below property sets the final state of the animation
        animate={{
            opacity: 1,
            scale: 1,
            x: 200,
            y: 150
        }}
        // below property sets the animation when the element is in view
        transition={{
            duration: 1,
            // delay: 2,
            // ease: "easeInOut"
        }}
        // below property sets the animation when the user hovers over the element
        whileHover={{
            scale: 1.2,
            rotate: 90
        }}
        // below property sets the animation when the user clicks on the element
        whileTap={{
            scale: 0.8,
            rotate: -90
        }}
        // below property starts the animation when the element is in view
        whileInView={{
            opacity: 1,
            scale: 1,
        }}
        // below property sets the animation when the user drags the element
        drag
        // variants={boxVariants}
        // initial="hidden"
        // animate="visible"
        ></motion.div>

        <motion.div className='box'
        variants={boxVariants2}
        // initial="hidden"
        // animate="visible"
        // transition={{duration: 1}}
        animate={isVisible ? "visible" : "hidden"}
        ></motion.div>

        <button onClick={() => setIsVisible(prev => !prev)}>
            Click Me to Show Animation
        </button>

        <motion.ul className="ul" variants={listVariants}
        initial="hidden" animate="visible">
            {items?.map((item, index) => (
                <motion.li 
                key={index} 
                variants={listVariants}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>

    </div>
  )
}

export default Test

/*
<motion.div className='box'
        variants={boxVariants2}
        // initial="hidden"
        // animate="visible"
        transition={{duration: 1}}
        animate={isVisible ? "visible" : "hidden"}
        ></motion.div>

        <button onClick={() => setIsVisible(prev => !prev)}>
            Click Me to Show Animation
        </button>
 */