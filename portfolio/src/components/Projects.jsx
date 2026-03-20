import { Box, Typography } from '@mui/material'
import React from 'react'
import { normalText, primaryHead, secondaryHead } from '../Style'

const Projects = () => {
  return (
   
     <Box sx={{  backgroundColor: "transparent",height:  {
    xs: "120vh",
    sm: "80vh",
    md: "95vh",
    lg: "75vh",
    xl: "70vh"
  }, display: 'flex', justifyContent: "space-around", flexDirection: "column", padding: "2% 2% 2% 2%", gap:2}}>
            <Typography sx={primaryHead}>Projects </Typography>

           <Box sx={{height:"90%",backgroundColor: "transparent", display: 'flex', justifyContent: "space-around", alignContent: "center", }}>
            
             <Box sx={{ backgroundColor: "transparent", width:"45%",display: "flex", flexDirection: "column", justifyContent: "flex-start", pl: 4,}}>
                <Typography sx={secondaryHead}>Sunray Business Operations Platform </Typography>
                <Typography sx={normalText}>Developed over 15 responsive UI screens for complex financial workflows using React and Chakra UI. This involved integrating with more than 20 REST APIs for robust vendor management and efficient transaction processing.
Implemented sophisticated validation logic that successfully reduced data entry errors by 50%. Through close collaboration with 5+ key stakeholders, the platform achieved an impressive 99.5% uptime in production environments. </Typography>
            </Box>
             <Box sx={{ backgroundColor: "transparent", width:"45%",display: "flex", flexDirection: "column", justifyContent: "flex-start", }}>
                <Typography sx={secondaryHead}>Connected School ERP System </Typography>
                <Typography sx={normalText}>Built interactive React modules for attendance tracking, marks management, library fee collection, and classroom updates for a school serving 500+ students.
  Integrated role-based authentication with Spring Boot backend, reducing login issues by 40%.
  Optimized PostgreSQL queries improving data retrieval speed by 35%. </Typography>
            </Box>
           </Box>
             <Box sx={{height:"45%", backgroundColor: "transparent", width:"100%",display: "flex", flexDirection: "column", justifyContent: "flex-start", pl: 4,}}>
                <Typography sx={secondaryHead}>Christian Streaming Platform USA-based | Jan 2025</Typography>
                <Typography sx={normalText}>Building a Netflix-like streaming platform with Spring Boot microservices. Developed backend services for user engagement tracking (likes, favorites, views).
                   Implemented recommendation algorithm analyzing 10,000+ user interactions. Designed and integrated UI for Favorites and Discovery pages with Redux state management. Engineered real-time updates with 99.9% API availability. </Typography>
            </Box>
   </Box>
  )
}

export default Projects
