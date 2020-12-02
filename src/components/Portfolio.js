import React from "react"
import "./../index.css"
import { motion } from "framer-motion"

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
}

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have or helped Built</h1>
      <div className="projects-container">
        {/* Project 1 - Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://fitness-101.herokuapp.com/?id=5fac04473ba944b7b3f20925"
          >
            <div className="project-images" id="fitness-tracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Fitness Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Jrubio1995/fitness"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://fitness-101.herokuapp.com/?id=5fac04473ba944b7b3f20925"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - budget-counter */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://budget-counter.herokuapp.com/"
          >
            <div className="project-images" id="budget-counter"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Budget Counter</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Jrubio1995/Budget-Tracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://budget-counter.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Jrubio1995/Employee-Directory"
          >
            <div className="project-images" id="employee"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>"Download" Employee Directory</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Jrubio1995/Employee-Directory"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Project 4 - Notes */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://note-taker-jr.herokuapp.com/"
          >
            <div className="project-images" id="note-take"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Note Taker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Jrubio1995/Jrubio/tree/master/homework/Note-Taker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://note-taker-jr.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 5 - JavaScript game */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://jrubio1995.github.io/Quiz-javascript/Develop/index.html"
          >
            <div className="project-images" id="java-game"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>JavaScript-Quiz Game</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Jrubio1995/Quiz-javascript"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://jrubio1995.github.io/Quiz-javascript/Develop/index.html"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Jrubio1995?tab=repositories"
        className="button-link"
      >
        <button className="button">For More Projects click Here</button>
      </a>
    </section>
  )
}

export default Portfolio
