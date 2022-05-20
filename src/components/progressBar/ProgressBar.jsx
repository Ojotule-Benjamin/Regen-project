import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProgressBar = ({sliderValueDis}) => {
  return (
    <CircularProgressbar 
    maxValue={100}
    minValue={1} 
    value = {sliderValueDis}
    text={`${sliderValueDis}%`}
    />
  );
};

export default ProgressBar