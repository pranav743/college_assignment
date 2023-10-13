import logo from './logo.svg';
import './App.css';
import CustomizedSteppers from './components/stepper';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';



function App() {

  const [stage, setStage] = useState(0);
  const steps = ['Personal Information', 'Account Setup', 'Profile Information', 'Address Details'];

  const nextPage = () => {
    setStage((init) => {
      
      if (init != 2){
        return init+1 
      } else {
        return init
      }
      
    
    });
  }
  const prevPage = () => {
    setStage((init) => {
      
      if (init != 0){
        return init-1 
      } else {
        return init
      }
      
    
    });
  }

  return (
    <div className='background'>
      <div className='form'>
        <div style={{ textAlign: 'center', margin: '20px 0 35px 0', fontSize: '22px' }}>{steps[stage]}</div>
        <div><CustomizedSteppers activeStep={stage} /></div>
        <Grid container spacing={0} columns={2} >
          <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              <div className='text-wrapper'>

                <input className='text-field' placeholder='Name'></input>

              </div>

              <div className='text-wrapper'>

                <input className='text-field' placeholder='Name'></input>

              </div>



            </div>
          </Grid>
          <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              <div className='text-wrapper'>

                <input className='text-field' placeholder='Name'></input>

              </div>

              <div className='text-wrapper'>

                <input className='text-field' placeholder='Name'></input>

              </div>



            </div>

          </Grid>
        </Grid>

        <div className='button-container'>
          {(stage > 0) ?
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={prevPage} sx={{
              borderRadius: '20px',
              height: '40px',
              color: 'red',
              border: 'red',
              '&:hover': {
                borderColor: 'red', // Change the border color to red on hover
              },
            }}>
              Back
            </Button> : <span></span>}
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={nextPage} sx={{
            borderRadius: '20px',
            height: '40px',
            color: 'white',
            border: 'red',
            backgroundColor: 'red',
            '&:hover': {
              borderColor: 'red',
              backgroundColor: 'white',
              color: 'red'
            },
          }} >
            {(stage != 2) ? "Next": "Submit"}
          </Button>

        </div>
      </div>

    </div>

  );
}

export default App;
