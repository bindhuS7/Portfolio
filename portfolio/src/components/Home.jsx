import { Box } from "@mui/material";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground ";
const Home = () => {
     const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {

    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6// Adjust this threshold as needed // 0.6 means the section is considered active when 60% of it is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

  }, []);
    return (
        // "##0B1C2D"
        <Box sx={{
            backgroundColor: "transparent", color: 'white', height: '100vh', overflowY: "hidden"
        }}>
             <Nav active={activeSection} />
             <AnimatedBackground />
            <Box sx={{
                height: "100vh",
                overflowY: "auto",

                /* Scrollbar Styling */
                "&::-webkit-scrollbar": {
                    width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "#1b0831",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#4f0aa3",
                    borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: "linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)",
                },
            }}>
                <div id="contact" style={{ scrollMarginTop: "180px" }}> <Contact /> </div>
                <div id="about" style={{ scrollMarginTop: "5vh" }}> <About /> </div>
                <div id="skills" style={{ scrollMarginTop: "5vh" }}><Skills /></div>
                <div id="experience" style={{ scrollMarginTop: "5vh" }}><Experience /></div>
                <div id="projects" style={{ scrollMarginTop: "5vh" }}> <Projects /></div>
            </Box></Box>
    )
}
export default Home;