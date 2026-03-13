import { Box, Typography } from "@mui/material";
import girl from "./images/download.webp"
import { motion } from "framer-motion";
import { primaryHead, normalText, normalTextwithtextDecorationNone } from "../Style";
const MotionBox=motion(Box);
const Contact=()=>{
    return(
    
    <Box sx={{backgroundColor:"transparent",height:"40vh",display:'flex',justifyContent:"space-around",alignContent:"center",padding:"2%"}}>
      <MotionBox 
      initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }} sx={{display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"start",height:"100%",lineHeight:2}}>
       <Typography sx={{background:"linear-gradient(360deg,red,green,yellow,blue,gray)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold",fontSize:"2rem",fontFamily:"Arial",fontStyle:"italic", 
           backgroundSize:"200% 200%",animation:"textAnimate 5s linear infinite"," @keyframes textAnimate":{
             "0%":{backgroundPosition:"0% 50%"},
             "50%":{backgroundPosition:"80% 100%"},
             "100%":{backgroundPosition:"100% 150%"}
           }
          }}>Hi,
           I am Bindhu S
          </Typography>
        {/* <Typography sx={primaryHead}>Bindhu S</Typography> */}
         <Typography   sx={normalText}>Devanahalli | sb661261@gmail.com | 7975604357</Typography>
          <a  style={normalTextwithtextDecorationNone}href="https://www.linkedin.com/in/bindhu-s-57855b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/bindhu-s-57855b269</a>
      </MotionBox>
      <MotionBox  
      initial={{x:200, opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:1}}
      >
        <img src={girl} alt=""  style={{width:"50",height:"50",borderRadius:"5%"}}/>
      </MotionBox>
    </Box>
            )}
            export default Contact;