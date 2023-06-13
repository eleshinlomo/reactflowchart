import React , {useState, useEffect} from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import '../Styles/App.css'
import Flownodes from '../components/Flownodes';


const Workspace = () => {
  return (
    <div>
        <Box  marginY = '1rem' sx={{width: '100%'}}>

{/* Flownodes component*/}

        <Box>

      <Flownodes />

        </Box>

        </Box>
    </div>
  )
}

export default Workspace