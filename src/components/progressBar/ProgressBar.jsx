import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProgressBar = ({sliderValueDis}) => {
  return (
    <CircularProgressbar 
    size={100}
    variant="determinate"
    value = {sliderValueDis}
    text={`${sliderValueDis}%`}
    />
  );
};

export default ProgressBar