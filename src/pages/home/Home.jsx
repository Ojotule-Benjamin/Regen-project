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




const Home = () => {
  const [sliderValue, setSliderValue] =useState(1);
  function getSliderData(value){
    setSliderValue(value);
  }

  //transforming the data
  let newMonthValue = {}

  const userDataTransform = userData.map(newDataFunc)
  function newDataFunc(item){
    const newActiveUserValue = sliderValue * item["Active User"];
    newMonthValue = { ...item, "Active User":newActiveUserValue };
    return newMonthValue
  };
  

  return (
    <div className='home'>
        <FeaturedInfo/>
        <div className='chartContainer'>
          <div className="SliderBar">
            <VerticalSlider onDataSet={getSliderData}/>
          </div>
          <Chart data={userDataTransform} 
          title="User Analytics" 
          grid dataKey="Active User"/>
          <ProgressBar/>
        </div>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
export default Home


//THE CODE BELOW DISPLAYS ERROR! FIX IT
/*export default function Home() {
  return (
    <div className='home'>
        home
    </div>
  )
}*/

