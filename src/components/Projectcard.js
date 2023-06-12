import React from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../Styles/App.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Searchbar from './Searchbar';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import Flownodes from './Flownodes';
import Lastcolumn from './Lastcolumn';
import Firstcolumn from './Firstcolumn';
import ShortcutIcon from '@mui/icons-material/Shortcut';



const Projectcard = () => {

    
  

  return (
    
    <Grid container spacing={1} style={{backgroundColor: 'black', xs: '100%', md: '100%', sm: '100%'}}>

{/* left icons (Firstcolumn) */}

      <Grid item xs={0.4} align='center' sx={{backgroundColor: '#333333'}}>
      
      <Box>
        <Firstcolumn />
      </Box>
      
        
      </Grid>


{/* Frameworks and AI (2nd column) */}



      <Grid item>
      <Paper style= {{backgroundColor:  '#333333'}}>

      {/* Search bar */}

       <Box >

       <Searchbar />
       
       </Box>


<Box p = {1}>
    <Typography >
        Installed
    </Typography>
</Box>

{/* Popular AI Icons box */}




<Box mt={1} display="flex" style= {{width: '100%'}} >

{/* ChatGPT */}

<Box p={1}  display="flex">
<img src="/ChatGPT_800x800.png" alt="chatGPT logo" className='img' />
</Box>

<Box>
<Typography variant="body1">
    ChatGPT
</Typography>

<Typography variant='body2' >
    ChatGPT
</Typography>
</Box>

<Box>
<Paper 
elevation={10}
style={{ 
    backgroundColor: "grey",
}} 
   >

<Typography>
    XR
</Typography>
</Paper>
</Box>

</Box>


{/* Midjourney */}

<Box p= {1} display='flex'>
    <Box >
        <img src="/mid_journey_logo.png" alt="midjourney logo" className='img' />
    </Box>

<Box pl={1}>
    <Typography>
    Mid Journey
    </Typography>

    <Typography>
    Create Illustration
    </Typography>
</Box>

</Box>



{/* OpenAI Helper */}

<Box p = {1} display='flex' flexWrap= 'wrap'  style= {{backgroundColor: "black"}} sx={{xs: '100%', md: '100%', sm: '100%'}}>

    <Box >
        <img src="/openai.jpg" alt="midjourney logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography>
    OpenAI Helper
    </Typography>

    <Typography>
    Act as content writer
    </Typography>
</Box>

<Box>
    <Typography>
    <Icon>
    <KeyboardArrowUpIcon />
    </Icon>
        XC
    </Typography>
</Box>

</Box>


{/* Spotify */}

<Box display='flex' p = {1}>
    <Box >
        <img src="/spotify_logo.png" alt="spotify logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    Spotify Mini Player
    </Typography>

    <Typography variant='body2'>
    Find Artists, play songs
    </Typography>
</Box>

</Box>


{/* Notion */}

<Box display='flex' p = {1}>
    <Box >
        <img src="/notion_gif.gif" alt="spotify logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    Notion
    </Typography>

    <Typography variant='body2'>
    Engineering Wiki
    </Typography>
</Box>

</Box>



{/* Shortcuts */}

<Box display='flex' p = {1}>
    <Box >
    <ShortcutIcon />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    Shortcuts
    </Typography>

    <Typography variant='body2'>
    Run Installed Shortcuts
    </Typography>
</Box>

</Box>


{/* Github */}

<Box display='flex' p = {1}>
    <Box >
        <img src="/github_logo.png" alt="spotify logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    Github
    </Typography>

    <Typography variant='body2'>
    Find Respository
    </Typography>
</Box>

<Box>
<Paper 
elevation={10}
style={{ 
    backgroundColor: "grey",
    
}} 
   >

<Typography>
    XR
</Typography>
</Paper>
</Box>

</Box>


{/* Lastpass */}

<Box display='flex' p = {1}>
    <Box >
        <img src="/lastpass_logo.png" alt="spotify logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    LastPass
    </Typography>

    <Typography variant='body2'>
    Search for your logins
    </Typography>
</Box>

</Box>


{/* Slack */}

<Box display='flex' p = {1}>
    <Box >
        <img src="/slack_logo.png" alt="spotify logo" className='img' />
    </Box>

<Box mr={10} ml={1}>
    <Typography variant='body1'>
    Slack
    </Typography>

    <Typography variant='body2'>
    Open channel, user
    </Typography>
</Box>

</Box>


        </Paper>
      </Grid>


{/* Column 3 */}

      <Grid item xs={6} >
      <Box sx={{width: '100%'}}>

      <Box>
        <Typography>
          
            {/* Content for the left column */}
            <h2>OpenAI Helper</h2>
        </Typography>
        </Box>

        <Box display='flex'>
        <Typography style= {{marginRight: '20px', color: 'purple'}}>
            Configure workflow

            </Typography>

        <Typography>
            Uses OpenAI to do multiple things V1.0.4
        </Typography>
        </Box>


{/* Drag and Drop Detail container area*/}

    
<Box  marginY = '1rem' sx={{width: '100%'}}>

{/* Flownodes component*/}

        <Box>

      <Flownodes />

        </Box>


    </Box>

        
        </Box>
      </Grid>



{/* 4th Column (Lastcolumn component) */}

<Grid item>

<Box >

<Lastcolumn />
    
</Box>
</Grid>



    </Grid>
  );
};

export default Projectcard;
