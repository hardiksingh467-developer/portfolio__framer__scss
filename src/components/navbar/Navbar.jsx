import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.5}}>Hardik Singh</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/hardik29/" target="_blank">
                    <img src="./linkedin__2.png" alt="" />
                </a>
                <a href="https://www.instagram.com/hardiksingh9414/" target="_blank">
                    <img src="./instagram.png" alt="" />
                </a>
                <a href="https://github.com/hardiksingh467-developer" target="_blank">
                    <img src="./github__2.png" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar