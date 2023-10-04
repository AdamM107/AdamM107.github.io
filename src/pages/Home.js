import React, {useEffect, useRef} from "react";
import { useSpring, animated } from "react-spring";
import { Link, Element, scroller } from 'react-scroll';
import './Home.css';
import githubIcn from '../assets/githubIcn.svg'
import linkedinIcn from '../assets/linkedinIcn.svg'

const backendSkills = ["Java", "Node.js", "Express.js", "C++", "MongoDB", "SQL"]
const frontendSkills = ["JavaFx", "React.js", "HTML", "CSS", "JavaScript", ""]
const Home = () => {
    const introRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Add 'visible' class to entry if it's in view
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        observer.observe(introRef.current);
        observer.observe(skillsRef.current);
        observer.observe(projectsRef.current);
        observer.observe(contactRef.current);

        return () => {
            observer.unobserve(introRef.current);
            observer.unobserve(skillsRef.current);
            observer.unobserve(projectsRef.current);
            observer.unobserve(contactRef.current);
        };
    }, []);

    return (
<div className={"home"}>
    <div className="media-link-container">
        <a className="media-link" href="https://github.com/AdamM107" target="_blank" rel="noopener noreferrer">
        <img src={githubIcn} alt="GitHub" />
        </a>
        <a className="media-link" href="https://www.linkedin.com/in/adam-moldovanyi-13a068102/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcn} alt="LinkedIn" />
        </a>
    </div>
    <Element name="intro" className="element">
    <div ref={introRef} className="block" id="intro">
        <h1>Hi,</h1>
        <p>
            If you didn't see it above, I'm Adam - a software developer with a passion for creating dynamic solutions to real-world problems.
            <br />
            Below, I invite you to explore my skills, projects I've worked on, and how to reach out to me.
        </p>
    </div>
    </Element>
    <Element name="skills" className="element">
    <div ref={skillsRef} className="block" id="skills">
        <h2>Skills</h2>
        <p>
            If you didn't see it above, I'm Adam - a software developer with a passion for creating dynamic solutions to real-world problems.
            I invite you to explore my work, learn about my skills, and get to know more about me.
        </p>
    </div>
    </Element>
    <Element name="projects" className="element">
    <div ref={projectsRef} className="block" id="projects">

    </div>
    </Element>
    <Element name="contact" className="element">
    <div ref={contactRef} className="block" id="contact">

    </div>
    </Element>


</div>
    );
}

export default Home;