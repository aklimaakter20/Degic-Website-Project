import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import {Box, Container, Grid,Grid2, Typography,Link,IconButton} from '@mui/material'

function Footer() {
  const FooterData = [
    {
      title: "Home",
      links: ['Become Affiliate', 'Go Unlimited', 'Services']
    },
    {
      title: "Products",
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
    {
      title: "Legals",
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
    {
      title: "Blog",
      links: ['About Us', 'Careers', 'Press', 'Blog']
    },
  ];
  const socialIcons = [
    {icon: <Facebook />, href: '#'},
    { icon: <Twitter />, href: '#'},
    {icon : <Instagram /> , href: '#'}
  ]
  return (
  <Box sx={{bgcolor: "#000", color: "#fff", py:6}}>
    <Container maxWidth = "lg">
  <Grid container spacing={4}>
  <Grid item xs={12} md={3}>
        <Typography>
          <img src="Flogo.png" alt="" />
        </Typography>
      </Grid>
      {
        FooterData.map((section,index)=>(
          <Grid item xs={6} md={2} key={index}>
            <Typography className='font-semibold'>
              {section.title}
            </Typography>
            {
              section.links.map((link, linkIndex)=>(
                <Box key={linkIndex}>
                  <Link href = "#" underline="none" color="inherit" display="block" sx={{my:1}}>
                  {link}
                  </Link>
                </Box>
              ))
            }
          </Grid>
        ))
      }
  </Grid>
  <hr className='mt-10 text-gray-800 mb-2' />
  <Box display= "flex" justifyContent="center">
    {
      socialIcons.map((social,index)=>(
        <IconButton key={index} color="inherit">
          {social.icon}
        </IconButton>
      ))
    }
  </Box>
  <Box mt={4} testAlign= "center">
    <Typography> @{new Date().getFullYear()} Degic All rights reserved</Typography>
  </Box>
    </Container>
  </Box>
  
  )
}

export default Footer
