import { Box, Button, Tooltip } from "@mui/material";
import git from "./images/github_1.png"
import naukri from "./images/OIP.webp"
import linkedId from "./images/in1.webp"
import resume from "./documents/bindhu.pdf"
import AddHome from '@mui/icons-material/Menu';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


const Nav = ({ active }) => {
  const activeStyle = {
    color: "#c35dae",
    // borderBottom: "2px solid #ff9800",
    // "&:hover": { color: "white" },
    fontWeight: "bold",
    // display:{xs:"block",sm:"none",md:"none",lg:"none",xl:"none"},
  };
  return (
    <Box sx={{
      position: "sticky",
      top: 0,
       fontSize: { xs: "10px", sm: "10px", md: "14px", lg: "16px",xl:"18px" },
      
      zIndex: 1000, backgroundColor: "black", color: 'white', height: "6vh", width: "98%", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: 'column', padding: "1%"
    }} >
      <Box sx={{fontSize:{xs:"2px",md:"5px"}, backgroundColor: "black", color: 'white', height: "4vh", width: "98%",display:"flex", alignItems: "center", justifyContent: "space-between", }}>
        <Box sx={{ width: {xs:"80%",sm:"45%",md:"45%",lg:"30%",xl:"20%"}, display: 'flex', justifyContent: "space-between", display:{xs:"none",sm:"flex",md:"flex",lg:"flex",xl:"flex"}, }}>
          <Button href="#about" sx={active === "about" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" } ,display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"}, fontSize: { xs: "10px", sm: "10px", md: "14px", lg: "16px",xl:"18px" }, }} >About </Button>
          <Button href="#skills" sx={active === "skills" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" },display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"}, fontSize: { xs: "10px", sm: "10px", md: "14px", lg: "16px" }, }} >skills </Button>
          <Button href="#experience" sx={active === "experience" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" },display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"}, fontSize: { xs: "10px", sm: "10px", md: "14px", lg: "16px" }, }} >exprience </Button>
          <Button href="#projects" sx={active === "projects" ? activeStyle : { textDecorationLine: "blink", fontStyle: "initial", fontWeight: "bold", color: "white", "&:hover": { color: "white" },display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"}, fontSize: { xs: "10px", sm: "10px", md: "14px", lg: "16px" }, }} >projects </Button>

        </Box>
 {/* <Tooltip title="About">
  <AddHome sx={{ display:{xs:"flex",sm:"none",md:"none",lg:"none",xl:"none"}, onClick={()=>{}}}} />
</Tooltip> */}
        <Box sx={{ width: {xs:"100%",sm:"30%",md:"20%",lg:"30%",xl:"30%"}, display: 'flex', justifyContent: "space-between",}}>
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