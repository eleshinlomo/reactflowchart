import React from 'react';
import { Grid, Paper, Typography, Box, TextField, IconButton, Button, Icon, ButtonGroup } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../Styles/App.css'




const Firstcolumn = () => {
  return (
    <div>
        <Box>
   <MoreHorizIcon />
      </Box>

      <Box>
      <ArrowForwardIosIcon />
      </Box>
    </div>
  )
}

export default Firstcolumn