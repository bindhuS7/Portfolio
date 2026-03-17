import { Box, Typography } from '@mui/material'

const Trail = () => {
  return (
    <>
     <Box sx={{width:"100vw",height:"100vh",backgroundColor:'black',position:"fixed",zIndex:-1,border:'2px solid red'}}>
   {[...Array(20)].map((_,i)=>(
<Box  key={i} 
// sx={{
 
//   width:`${20+Math.random()*10}px`,
//   height:`${20+Math.random()*10}px`,
//   // width:"10px",
//   // height:"40px",
//   borderRadius:'45px',
//   backgroundColor:'white',
//   position:"absolute",
//  top:`${Math.random()*100}%`,
//  left:`${Math.random()*100}%`,
//  animation:`balls ${10+Math.random()*10}s linear infinite`,
// }}
// key={i}
          sx={{
            position: "absolute",
            bottom: "50px",
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,

            borderRadius: "50%",
            background:
            "radial-gradient(circle at 20% 30%,  rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
            left: `${Math.random() * 100}%`,
            animation: `bubble ${6 + Math.random() * 6}s linear infinite`,
        //     // initial={{ x: -200, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}

            opacity: 0.7,
          }}

/>
   ))}   
   
  
    </Box>
     <Box sx={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"transparent",}}>
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
   <style>
    {`
    
    @keyframes bubble {
    
     0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
    }
    `}
   </style>
    </>
   
  )
}

export default Trail
