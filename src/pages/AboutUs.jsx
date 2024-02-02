import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import CV from "../images/images.jpeg";


const AboutUs = () => {
  return (
    <>
     <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Unleash Your Professional Story with Our Resume Builder App</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Resume Building made easy and efficient.<br/>
            <b>A Free, Quick and Easy Way to Create Your Professional Resume.</b><br/>

              Welcome to Resume-Builder, where we believe that every career journey deserves a captivating story. In a world driven by innovation and constant change, your resume is the key to unlocking new opportunities and shaping your professional narrative. Our Resume Builder App is not just a tool; it's a partner in your journey to success.  

              <h3>Your Story, Your Success</h3>  
              Building a resume with our app is not just about listing your qualifications; it's about telling your story. Our user-friendly interface guides you through the process, helping you highlight your achievements, showcase your skills, and present your career trajectory with clarity and impact. Whether you're a recent graduate, a seasoned professional, or someone making a career change, our app is designed to cater to your unique needs.

              <br />
              
              <h5>In a world where first impressions matter, Resume-Builder is your trusted companion in crafting a resume that opens doors to new opportunities. Start your journey with us today and let your professional story unfold. Your future awaits – let's build it together!</h5>
              
          </Typography>
          <Stack
            sx={{
              width: "100%",
              placeSelf: "center",
            }}
          >
            <img
              src={CV}
              alt="img"
            // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
           Kindly Share in your circle
          </Typography>
          <Box className="icons">
            <Link to="https://www.instagram.com">
              <InstagramIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="error"
              />
            </Link>

            <Link to="https://www.facebook.com">
              <FacebookIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/deshmukhsahil/">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            <Link to="https://web.whatsapp.com">
              <WhatsAppIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="success"
              />
            </Link>
            <Link to="https://www.twitter.com">
              <XIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="info"
              />
            </Link>
            <Link to="https://github.com">
              <GitHubIcon
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default AboutUs
