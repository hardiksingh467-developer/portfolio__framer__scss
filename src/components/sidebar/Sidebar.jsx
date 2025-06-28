import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import {motion, delay} from 'framer-motion';

const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                delay: 0.5,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    };

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen = {setOpen} />
    </motion.div>
  )
}

export default Sidebar