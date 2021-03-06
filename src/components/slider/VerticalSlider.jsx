
import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './verticalSlider.css';

export default function VerticalSlider({ onDataSet }) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
  //to handle the change on slider component
  const handleChange = (event) => {
    onDataSet(event.target.value);
     
  }; 
  return (
    <Box sx={{ height: 210 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            //WebkitAppearance: 'slider-vertical',
          },
        }}
        onChange = {handleChange}
        orientation="vertical"
        //defaultValue={30}
        aria-label="Temperature"
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
}







  