import './home.css'
import React, { useState } from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from "../../dummyData"
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import VerticalSlider from '../../components/slider/VerticalSlider'
import '../../components/slider/verticalSlider.css';
import ProgressBar from '../../components/progressBar/ProgressBar'



const Home = (props) => {
  //set the slider value and pass to the chart component
  const [sliderValue, setSliderValue] = useState(1);
  const getSliderValue = (value) => {
    setSliderValue(value)
  }
  //let valueOfSlider = sliderValue;

  
  //transforming the data from dummydata
  //let newMonthValue = {}
  const userDataTransform = userData.map(newDataFunc)
  function newDataFunc(item){
    const newActiveUserValue = sliderValue * item["Active User"] * Math.random();
    return { ...item, "Active User":newActiveUserValue };
  };
  return (
    <div className='home'>
        <FeaturedInfo featuredInfoDataSlider = {sliderValue}/>
        <div className='chartContainer'>
          <div style={{ marginTop: 70}}>
          <VerticalSlider onDataSet={getSliderValue}/>
          </div>
          

          <Chart 
          data={userDataTransform} 
          title="User Analytics" 
          grid 
          dataKey="Active User"/> 

          <ProgressBar sliderValueDis={sliderValue}/>
         
        </div>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
export default Home


