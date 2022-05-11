import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProgressBar = (props) => {
    const value = props.progressBarData;
    
    
  return (
    <CircularProgressbar 
    value={value} 
    maxValue={100}
    minValue={1} 
    text={`${value * 1}%`}
    />
  );
};

export default ProgressBar