import React from 'react'
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward, } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        {/* 1st feature starts here*/ }
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney" >$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 1st feature end here*/ }

        {/* 2nd feature starts here*/ }
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney" >$4,415</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 2nd feature end here*/ }

        {/* 3rd feature starts here*/ }
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney" >$2,225</span>
                <span className="featuredMoneyRate">
                    +2.4<ArrowUpward className='featuredIcon positive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 3rd feature ends here*/ }

    </div>
  )
}

export default FeaturedInfo