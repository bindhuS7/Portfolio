import { Box, Typography } from "@mui/material";
import girl from "./images/download.webp"
import { motion } from "framer-motion";
// import { normalText, normalTextwithtextDecorationNone } from "../Style";
const MotionBox=motion(Box);
const Contact=()=>{
    return(
    
    <Box sx={{ backgroundColor:"transparent",height:{xs:"45vh",sm:"80vh",md:"60vh",lg:"50vh",xl:"40vh"},display:'flex',justifyContent:{xs:"center",sm:"center",md:"space-around",lg:"space-around",xl:"space-around"}, flexDirection:{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"},alignItems:"center",padding:"2%",width:"100%",overflow:'hidden'}}>
      <MotionBox 
      
      initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }} sx={{display:"flex"   ,justifyContent:"center" ,flexDirection:'column',alignItems:"start",height:"100%",lineHeight:2,}}>
       <Typography sx={{background:"linear-gradient(360deg,red,green,yellow,blue,gray)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold",fontSize:{xs:"3px",sm:"8px",md:"12px"},fontFamily:"Arial",fontStyle:"italic", 
           backgroundSize:"200% 200%",animation:"textAnimate 5s linear infinite"," @keyframes textAnimate":{
             "0%":{backgroundPosition:"0% 50%"},
             "50%":{backgroundPosition:"80% 100%"},
             "100%":{backgroundPosition:"100% 150%"}
           }, fontSize:{ xs:"1rem",
  sm:"1.2rem",
  md:"1.5rem",
  lg:"1.8rem",
  xl:"2rem"}
          }}>Hi,
           I am Bindhu S
          </Typography>
        {/* <Typography sx={primaryHead}>Bindhu S</Typography> */}
        
         {/* <Typography   sx={normalText} >Devanahalli | sb661261@gmail.com | 7975604357</Typography> */}

         <Typography    sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // 📱 column → 💻 row
    alignItems: { xs: "center", md: "flex-start" },
    gap: { xs: 0.5, md: 2 },
    textAlign: { xs: "center", md: "left" },
    fontSize:{xs:"10px",sm:"10px",md:"15px",lg:"18px",xl:"20px"}
  }} >Devanahalli | sb661261@gmail.com | 7975604357</Typography>
          <Box component='image'  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // 📱 column → 💻 row
    alignItems: { xs: "center", md: "flex-start" },
    gap: { xs: 0.5, md: 2 },
    textAlign: { xs: "center", md: "left" },
    fontSize:{xs:"12px",sm:"10px",md:"15px",lg:"18px",xl:"20px"},
     textDecoration: "none" 
  }}href="https://www.linkedin.com/in/bindhu-s-57855b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/bindhu-s-57855b269</Box>
          {/* <a  style={normalTextwithtextDecorationNone}href="https://www.linkedin.com/in/bindhu-s-57855b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/bindhu-s-57855b269</a> */}

      </MotionBox>
      <MotionBox  
      initial={{x:200, opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:1}}
      >
       <Box
  component="img"
  src={girl}
  alt=""
  sx={{
    width: {
      xs: "30vw",   // small screen 📱
      sm: "40vw",
      md: "180px",   // tablet 💻
      lg: "220px",
      xl: "260px"
    },
    height: {
      xs: "30vh",
      sm: "40vh",
      md: "180px",
      lg: "220px",
      xl: "260px"
    },
    borderRadius: "10%",
    objectFit: "cover"
  }}
/> </MotionBox>
    </Box>
            )}
            export default Contact;