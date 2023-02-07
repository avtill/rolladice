import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 60,
//     lineHeight: '60px',
//   }));

//   const lightTheme = createTheme({ palette: { mode: 'light' } });

const Result = () => {
  return (
        <Box
      sx={{display: 'flex' , flexWrap: 'wrap', '& > :not(style)': {m: 'auto', mt: 1, mb: 1, width: 128, height: 128,}, }}
    >
      <Paper elevation={3}>Rzuty</Paper>
      <Paper elevation={3}>Wyniki z modyfikatorami</Paper>
      <Paper elevation={3}>Suma wszystkich</Paper>
      <Paper elevation={3}>Średnia wszystkich</Paper>
    </Box>

  )
}

export default Result
