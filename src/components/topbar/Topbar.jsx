import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className="topbar top">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Splitadmin</span>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}