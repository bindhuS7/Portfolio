import { Box, Typography } from '@mui/material'
import { normalText, primaryHead, secondaryHead, skillBox } from '../Style'
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const Skills = () => {
    return (
        <Box sx={{ backgroundColor: "transparent", height: "5vh", display: 'flex', justifyContent: "space-between", flexDirection: "column", padding: "2% 2% 2% 2%", marginBottom: "10vh" }}>
            <Typography sx={primaryHead}>skills</Typography>
            <Box sx={{ height: "70%", display: 'flex', justifyContent: "space-around" }}>
               <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={skillBox}
                >
                    <Typography sx={secondaryHead}>Frontend</Typography>
                    <Typography sx={normalText}>React.js · JavaScript (ES6+) · HTML5 · CSS3 · Chakra UI · Responsive Design</Typography>
                </MotionBox>
                <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={skillBox}
                >
                    <Typography sx={secondaryHead}>Backend</Typography>
                    <Typography sx={normalText}>Java · Spring Boot · Microservices · REST APIs</Typography>
                </MotionBox>
               <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={skillBox}
                >
                    <Typography sx={secondaryHead}>Database</Typography>
                    <Typography sx={normalText}>PostgreSQL · Query Optimization</Typography>
                </MotionBox>
                <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={skillBox}
                >
                    <Typography sx={secondaryHead}>Tools</Typography>
                    <Typography sx={normalText}>Git · Postman · Tomcat · Maven · IntelliJ IDEA</Typography>
                </MotionBox>
            </Box>
        </Box>

    )
}

export default Skills
