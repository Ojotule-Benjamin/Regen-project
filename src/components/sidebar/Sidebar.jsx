import React from 'react';
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, PersonOutline, Inventory, AttachMoney, Assessment, MarkEmailUnread, Bookmarks, Comment, WorkOutline, Error } from "@mui/icons-material"

export default function Side() {
  return (
    <div className="sidebar">
      <div className='sidebarWrapper'>
        
        {/*1st menu starts here */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              < LineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className='sidebarListItem'>
              < Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className='sidebarListItem'>
              < TrendingUp className='sidebarIcon'/>
              Sales 
            </li>
          </ul>
        </div>
        {/*1st menu ends here */}

        {/*2nd menu starts here */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              < PersonOutline className='sidebarIcon'/>
              User
            </li>
            <li className='sidebarListItem'>
              < Inventory className='sidebarIcon'/>
              Products
            </li>
            <li className='sidebarListItem'>
              < AttachMoney className='sidebarIcon'/>
              Transaction
            </li>
            <li className='sidebarListItem'>
              < Assessment className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
        {/*2nd menu ends here */}

        {/*3rd menu starts here */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              < MarkEmailUnread className='sidebarIcon'/>
              Mail
            </li>
            <li className='sidebarListItem'>
              < Bookmarks className='sidebarIcon'/>
              Feedback
            </li>
            <li className='sidebarListItem'>
              < Comment className='sidebarIcon'/>
              Messages 
            </li>
          </ul>
        </div>
        {/*3rd menu ends here */}
        
        {/*4th menu starts here */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              < WorkOutline className='sidebarIcon'/>
              Manage
            </li>
            <li className='sidebarListItem'>
              < Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className='sidebarListItem'>
              < Error className='sidebarIcon'/>
              Reports 
            </li>
          </ul>
        </div>
        {/*5th menu ends here */}  
      </div>
    </div>
  )
}



