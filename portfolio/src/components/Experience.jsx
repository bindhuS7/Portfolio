import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { normalText, primaryHead, secondaryHead } from '../Style'

const Experience = () => {
    return (
        <Box sx={{  backgroundColor: "transparent", height: "60vh", display: 'flex', justifyContent: "space-between", flexDirection: "column", padding: "2% 2% 0% 2%",}}>
            <Typography sx={primaryHead}>Experience </Typography>

            <Box  sx={{
    backgroundColor: "transparent",
    // height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    pl: 4,
   
  }}>
                <Typography sx={secondaryHead} p={"1vh 0 0 0" } >Software Developer | Levisoft Technologies | Dec 2022 – Present </Typography>
                    <List sx={{ listStyleType: "circle", pl: 4 }} >
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText sx={normalText} primary="Led the development of scalable and responsive frontend features using React, building reusable UI component libraries and optimizing user experience across various devices."/>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText sx={normalText} primary="Designed and implemented robust backend services using Spring Boot microservices, ensuring high availability and developing secure, performant REST API endpoints.
"/>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText sx={normalText} primary="Managed and optimized PostgreSQL databases, including complex schema design, writing high-performance queries, and ensuring data integrity and scalability."/>
                        </ListItem>
                    </List>

                    
            
            </Box>
             <Typography sx={primaryHead}>Key Contributions </Typography>
                 
           <Box sx={{
    backgroundColor: "transparent",
    display: "flex",
    //  height: "40%",
    flexDirection: "column",
    justifyContent: "flex-start",
    pl: 4,
    gap: 2,
  }}>
                <List sx={{ listStyleType: "disc", pl: 4 ,}}>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText sx={normalText} primary="API Integration: Integrated REST APIs between frontend and backend applications across multiple live projects.
"/>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <ListItemText sx={normalText} primary="Module Development: Contributed to modules including authentication, attendance, invoice management, notifications, and media interaction features.
"/>
                        </ListItem>
                       
                    </List>
           </Box>
        </Box>
    )
}

export default Experience
