import React from 'react'
import { Grid, Paper, Typography, Box, TextField, IconButton, Icon } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Search} from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../Styles/App.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Searchbar = () => {
  return (
    <Box style= {{backgroundColor : 'black'}}>
        <TextField
       sx={{width: '100%'}}
      InputProps={{

        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),

        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
            <MoreHorizIcon />
            </IconButton>
          </InputAdornment>
        )
        
      }}
    />
    </Box>
  )
}

export default Searchbar