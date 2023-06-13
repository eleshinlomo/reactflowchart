import React from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import '../Styles/App.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Lastcolumn = () => {
  return (
    <div>
        {/* Top Right Icons */}
<Box 
color='grey' 
display='flex' 
justifyContent= 'space-between' 
alignItems= 'space-between'
marginTop = '5px'
>
<CancelPresentationOutlinedIcon />

<AddOutlinedIcon />
<PestControlOutlinedIcon />
<MenuOutlinedIcon />
</Box>

{/* Right Buttons */}
        
<Box  marginTop= '15px'>

    <Button size='small' sx={{
        marginTop: '3px',
        width: '100%',
        backgroundColor: '#333333',
        color: 'white'
        }}>
        
HELLO
    </Button>



    <Button size='small' sx={{
        marginTop: '3px',
        width: '100%',
        backgroundColor: '#333333',
        color: 'white'

        }}>
        
Getting started
    </Button>

    <Button size='small' sx={{
        marginTop: '3px',
        width: '100%',
        backgroundColor: '#333333',
        color: 'white'
    }}>
        
Prefabs
    </Button>

    <Button size='small' sx={{
        marginTop: '3px',
        width: '100%',
        backgroundColor: '#333333',
        color: 'white'
        }}>
        
        Favorites
    </Button>
    </Box>
    </div>
  )
}

export default Lastcolumn