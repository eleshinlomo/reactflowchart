import React from 'react'
import Projectcard from '../components/Projectcard';
import Box from '@mui/material/Box';
import { Paper, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';



function Home() {

  const theme = createTheme({
    palette: {
      mode: "dark",

    }
  })

  return (
    

<ThemeProvider theme={theme}>

<Paper>

<Box display="flex" alignContent= "center">

        
          <Projectcard />
        
</Box>
</Paper>
</ThemeProvider>
    
  

    
  );
}

export default Home;
