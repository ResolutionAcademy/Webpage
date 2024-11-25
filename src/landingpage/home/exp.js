import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LearningExperience() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
        <div className="col-sm-4 text-center p-4" style={{ color: "#HHH" }}>
          <h2>LEARNING EXPERIENCE</h2>
        </div>
        <div className="col-3 line" style={{ border: "1px solid black" }}></div>
      </div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="row justify-content-center"
      >
        <motion.div
          variants={featureVariants}
          className="col-8 col-sm-6 col-md-5 col-lg-3 col-xl-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <Link to="/">
            <i
              class="fa-solid fa-graduation-cap"
              style={{ fontSize: "9rem" }}
            ></i>
            <br></br>
            <br></br>
            <b>ACADEMIC DEVELOPMENT</b>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          className="col-8 col-sm-6 col-md-5 col-lg-3 col-xl-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <Link to="/">
            <i class="fa-solid fa-dumbbell" style={{ fontSize: "9rem" }}></i>
            <br></br>
            <br></br>
            <b>PHYSICAL DEVELOPMENT</b>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          className="col-8 col-sm-6 col-md-5 col-lg-3 col-xl-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <Link to="/">
            <i class="fa-solid fa-brain" style={{ fontSize: "9rem" }}></i>
            <br />
            <br />
            <b>EMOTIONAL DEVELOPMENT</b>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          className="col-8 col-sm-6 col-md-5 col-lg-3 col-xl-2 p-3 text-center m-3 rounded-md"
          style={{ backgroundColor: "#801034", color: "white" }}
        >
          <Link to="/">
            <i class="fa-solid fa-user-group" style={{ fontSize: "9rem" }}></i>
            <br />
            <br />
            <b>SOCIAL DEVELOPMENT</b>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LearningExperience;
