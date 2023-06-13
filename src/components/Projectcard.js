import React , {useState, useEffect} from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import '../Styles/App.css'
import Searchbar from './Searchbar';
import Lastcolumn from './Lastcolumn';
import Firstcolumn from './Firstcolumn';
import HotelIcon from '@mui/icons-material/Hotel';
import Chatgptpage from '../Pages.js/Chatgptpage';
import Workspace from '../Pages.js/Workspace';
import WorkspacesIcon from '@mui/icons-material/Workspaces';



const Projectcard = () => {
const [showChatGpt, setShowChatGpt] = useState(false)
const [task, setTask] = useState('Nothing')
const [showSleepMode, setShowSleepMode] = useState(true)
const [showWorkSpace, setShowWorkspace] = useState(false)


    //  Icons
    const chatgptIcon = (
        <Icon>
            <img src= "/ChatGPT_800x800.png" alt="chat Gpt" className='img' />
        </Icon>
    )

    const midjourneyIcon = (
        <Icon>
            <img src="/mid_journey_logo.png" alt="midjourney logo" className='img' />
        </Icon>
    )
    
  

  return (
    
    <Grid container spacing={2} style={{backgroundColor: 'black', height: '100vh'}}>

{/* left icons (Firstcolumn) */}

      <Grid item xs={12} sm={0.4} md={0.4} lg={0.4} align='center' sx={{backgroundColor: '#333333'}} display='none'>
      
      <Box>
        <Firstcolumn />
      </Box>
      
        
      </Grid>


{/* Frameworks and AI (2nd column) */}



      <Grid item  xs={12} sm={12} md={12} lg={3}>
      <Paper>

      {/* Search bar */}

       <Box >

       <Searchbar />
       
       </Box>


<Box p = {1}>
    <Typography >
        Choose A Task
    </Typography>
</Box>

{/* Popular AI Icons box */}

{/* Do Nothing */}
<Box>
<Button
onClick={()=>{
    setShowSleepMode(true)
    setShowChatGpt(false)
    setTask('Nothing')
    setShowWorkspace(false)
    }}
variant="text" 
size='large'
startIcon = {<HotelIcon />}
sx = {{
    width: '100%',
    justifyContent: 'flex-start',
    color: 'white'
    }}
>
    DO NOTHING
</Button>
<Typography variant='body3' pl={5} sx={{color: 'white'}}>
    Take some rest
</Typography>
</Box>

{/* ChatGPT */}

<Box>
<Button 
onClick={()=>{
setShowChatGpt(true);
setTask('chatGPT');
setShowSleepMode(false)
setShowWorkspace(false)
}}
variant="text" 
size='large'
startIcon = {chatgptIcon}
sx = {{
    width: '100%',
    justifyContent: 'flex-start',
    color: 'white'
    }}
>
    ChatGPT
    
</Button>

<Typography variant='body3' pl={5} sx={{color: 'white'}}>
    Complete task with AI
</Typography>
</Box>


{/* WORKSPACE */}

<Box>
    <Button
    onClick={()=>{
    setShowSleepMode(false)
    setShowChatGpt(false)
    setTask('Workspace')
    setShowWorkspace(true)
    }}
variant="text" 
size='large'
startIcon = {<WorkspacesIcon />}
sx = {{
    width: '100%',
    justifyContent: 'flex-start',
    color: 'white'
    }}
    >
        WORKSPACE
    </Button>
    <Typography variant='body3' pl={5} sx={{color: 'white'}}>
    Create workflow
</Typography>
</Box>



{/* Midjourney */}

<Box>

    <Button
    onClick={()=>{
    setShowSleepMode(false)
    setShowChatGpt(false)
    setTask('Mid Journey')
    setShowWorkspace(false)
    }}
variant="text" 
size='large'
startIcon = {midjourneyIcon}
sx = {{
    width: '100%',
    justifyContent: 'flex-start',
    color: 'white'
    }}
    >
    Mid Journey
    </Button>

    <Typography variant='body3' pl={5} sx={{color: 'white'}}>
    Create Images with AI
    </Typography>
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


{/* Task Area*/}

      <Grid item xs={12} sm={12} md={12} lg={6}>

      <Box sx={{width: '100%'}}>

      <Typography>
        You are currently working on <span className='task'>{task.toUpperCase()}</span>
      </Typography>

     {showSleepMode ?
     <div>
      <Box>
        <Typography>
            Sleep mode
        </Typography>
      </Box>
      </div>:null
     }

{/* ChatGPT */}
      
{ showChatGpt ?
   <div>
      <Chatgptpage />
    </div>:null
}

{/* Workspace */}

{showWorkSpace ?

<div>
    <Workspace />
</div>:null

}


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
