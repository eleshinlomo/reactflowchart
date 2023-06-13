import React , {useState, useEffect} from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import '../Styles/App.css'


const Chatgptpage = () => {
  return (
    <div>
        <Box>
        <Typography>
          
            {/* Content for the left column */}
            <h2>Write Content Like A Pro & Ask Anything</h2>
        </Typography>
        </Box>

        <Box display='flex'>
        <Typography style= {{marginRight: '20px', color: 'purple'}}>
            Delegate your tasks to AI 

            </Typography>

        <Typography>
            Uses OpenAI to do multiple things V1.0.4
        </Typography>
        </Box>
    </div>
  )
}

export default Chatgptpage