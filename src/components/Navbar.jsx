import React from 'react'
import {AppBar,Toolbar,Typography,IconButton ,Button,Drawer,List,ListItem,ListItemText, useMediaQuery} from "@mui/material";
import MenuICon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
function Navbar() {
    const [open, setOpen ]= useState(false);
    const Theme = useTheme();
    const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

    const menuItems = ["About","Services", "Projects","Contacts"];
  return (
    <>
      <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor: "white" , color: "#050A30" ,borderBottom: "1px solid #050A30"}}>
        <Toolbar>
            {
                isMobile ? (
                    <div>
                        <IconButton color='inherit' onClick={()=> setOpen(true)}>
                         <MenuICon/>
                        </IconButton>
                    </div>
                ): (
                    <>
                        <Typography sx={{flexGrow: 1}}>
                            <img className='logo'  src="logo.png" alt="" />
                        </Typography>
                        {
                            menuItems.map((item)=>(
                                <Button color= 'inherit'sx={{borderRadius: '10px' ,'&:hover':{backgroundColor: '#050A30', borderRadius: "10px", marginLeft: "20px", color: 'white', transitionDuration: "700"}}} key= {item}>{item}</Button>
                            ))
                        }
                        <Button variant='outlined' sx={{color: '#050A30',marginLeft: "30px",  borderRadius: '10px' ,'&:hover':{backgroundColor: '#050A30', color: 'white'} }}>Sign Up</Button>
                    </>
                )}
        </Toolbar>

      </AppBar>
      <Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>
        <List>
            {
                menuItems.map((item)=>(
                    <ListItem button key={item} onClick={()=> setOpen(false)}>
                        <ListItemText>
                            {item}
                        </ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button >
                <ListItemText primary="Sign Up"/>

            </ListItem>
        </List>

      </Drawer>
    </>
  )
}

export default Navbar

