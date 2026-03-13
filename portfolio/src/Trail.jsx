import { Box, Typography } from '@mui/material'
import React from 'react'

const Trail = () => {
  return (
   <Box sx={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black",}}>
   <Typography sx={{background:"linear-gradient(360deg,red,green,yellow,blue,gray)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold",fontSize:"2rem",fontFamily:"Arial",fontStyle:"italic", 
    backgroundSize:"200% 200%",animation:"textAnimate 5s linear infinite"," @keyframes textAnimate":{
      "0%":{backgroundPosition:"0% 50%"},
      "50%":{backgroundPosition:"80% 100%"},
      "100%":{backgroundPosition:"100% 150%"}
    }
   }}>Hi,
    I am Bindhu S
   </Typography>
   
   </Box>
  )
}

export default Trail
