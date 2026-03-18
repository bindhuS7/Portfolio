import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { aboutBox, aboutcontentdes, primaryHead, secondaryHead } from "../Style";
const MotionBox = motion(Box)
const About = () => {
    return (

        <Box sx={{ backgroundColor: "transparent", height: {xs:"40vh",sm:"45vh",md:"40vh",lg:"35vh",xl:"35vh"}, display: 'flex', justifyContent: "space-between",  flexDirection: "column", padding: "0% 2% 0% 2%"}}>
            <Typography sx={primaryHead}>About</Typography>
            <Box sx={{backgroundColor: "transparent", height: "95%", display: 'flex',flexDirection:{xs:"column",sm:"row",md:"row",lg:"row",xl:"row"}, justifyContent: "space-around", alignContent: "center", }}>
                <MotionBox
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{scale:1.2,x:"40px"}}
                    sx={aboutBox}>

                    <Typography sx={secondaryHead} >
                        Who I am
                    </Typography>
                    <Typography sx={aboutcontentdes}>
                        Full Stack Developer focused on building scalable web applications with React and Spring Boot. I design intuitive user interfaces and build robust backend systems that power enterprise features.
                    </Typography>
                </MotionBox>
                <MotionBox
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                     whileHover={{scale:1.2,x:"40px"}}
                    sx={aboutBox}>

                    <Typography sx={secondaryHead} >
                        What I do
                    </Typography>
                    <Typography sx={aboutcontentdes}>
                        I deliver production-grade features at Levisoft Technologies, working across the stack to improve performance, maintainability, and user experience. </Typography>
                </MotionBox>
                <MotionBox
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                     whileHover={{scale:1.2,x:"40px"}}
                    sx={aboutBox}>

                    <Typography sx={secondaryHead} >
                        How I work
                    </Typography>
                    <Typography sx={aboutcontentdes}>
                        Product-focused, test-driven, and collaborative — I pair clean code with pragmatic architecture to ship reliable solutions fast.</Typography>
                </MotionBox>


            </Box>
        </Box>
    )
}
export default About;