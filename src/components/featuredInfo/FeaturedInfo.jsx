import React from 'react'
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward, } from '@mui/icons-material';

const FeaturedInfo = ({featuredInfoDataSlider}) => {

    //for revenue data
    let featuredMoneyRev = featuredInfoDataSlider * 2415
    let featuredRateRev = featuredInfoDataSlider * 11.4

    //for sales
    let featuredMoneySales = featuredInfoDataSlider * 4415
    let featuredRateSales = featuredInfoDataSlider * 11.4

    //for Cost 
    let featuredMoneyCost = featuredInfoDataSlider * 2225
    let featuredRateCost = featuredInfoDataSlider * 2.4


  return (
    <div className="featured">
        {/* 1st feature starts here*/ }
        <div className={`featuredItem ${featuredMoneyRev > 38640 && `backgroundGreen` }`}>
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer" >
                <span className="featuredMoney" >${featuredMoneyRev}</span>
                <span className="featuredMoneyRate">-{featuredRateRev}<ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 1st feature end here*/ }

        {/* 2nd feature starts here*/ }
        <div className={`featuredItem ${featuredMoneySales > 238410 && `backgroundRed`}`}>
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney" >${featuredMoneySales}</span>
                <span className="featuredMoneyRate">-{featuredRateSales}<ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 2nd feature end here*/ }

        {/* 3rd feature starts here*/ }
        <div className={`featuredItem ${featuredMoneyCost > 184675 && `backgroundblue`}`}>
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney" >${featuredMoneyCost}</span>
                <span className="featuredMoneyRate">+{featuredRateCost}<ArrowUpward className='featuredIcon positive'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 3rd feature ends here*/ }

    </div>
  )
}

export default FeaturedInfo