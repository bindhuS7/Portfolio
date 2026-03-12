import { Box, Button } from "@mui/material";
import git from "./images/github_1.png"
import naukri from "./images/OIP.webp"
import linkedId from "./images/in1.webp"
import resume from "./documents/bindhu.pdf"

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


const Nav = ({ active }) => {
  const activeStyle = {
    color: "#c35dae",
    // borderBottom: "2px solid #ff9800",
    // "&:hover": { color: "white" },
    fontWeight: "bold",
  };
  return (
    <Box sx={{
      position: "sticky",
      top: 0,
      zIndex: 1000, backgroundColor: "black", color: 'white', height: "6vh", width: "98%", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: 'column', padding: "1%"
    }} >
      <Box sx={{ backgroundColor: "black", color: 'white', height: "4vh", width: "98%", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
        <Box sx={{ width: "30%", display: 'flex', justifyContent: "space-between", }}>
          <Button href="#about" sx={active === "about" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" } }} >About </Button>
          <Button href="#skills" sx={active === "skills" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" } }} >skills </Button>
          <Button href="#experience" sx={active === "experience" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" } }} >exprience </Button>
          <Button href="#projects" sx={active === "projects" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" } }} >projects </Button>

        </Box>

        <Box sx={{ width: "15%", display: 'flex', justifyContent: "space-between" }}>
          <a href="https://github.com/bindhuS7?tab=repositories">
            <img src={git} alt="" style={{ width: '5', height: "5vh", color: "white", borderRadius: "55%" }} />
          </a>
          <a href="https://www.linkedin.com/in/bindhu-s-57855b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src={linkedId} alt="" style={{ width: '5', height: "5vh", color: "white", borderRadius: "60%" }} />
          </a>
          <a href="https://www.naukri.com/mnjuser/homepage">
            <img src={naukri} alt="" style={{ width: '3', height: "4vh", color: "white", borderRadius: "50%" }} />
          </a>

          <a href={resume} download>
            <SimCardDownloadIcon sx={{ width: '5', height: "5vh", color: "white", cursor: "pointer" }} />
          </a>
        </Box>
      </Box>
      <Box sx={{ width: '100%', backgroundColor: 'white', border: '1px solid white' }} />
    </Box>
  )
}
export default Nav;