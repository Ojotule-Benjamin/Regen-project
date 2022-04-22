import React from 'react'
import "./widgetSm.css"
import { Visibility } from "@mui/icons-material"

const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className='widgetSmList'>
            {/*1st list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profile image" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Ojochoko Mary Ochuma</span>
                    <span className='widgetSmUserTitle'>Product Designer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*1st ends starts here */}

            {/*2nd list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profilePicture" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Benjamin Ojotule Ajodo</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*2nd ends starts here */}

            {/*3rd list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profile image" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Anna Omede</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*3rd ends starts here */}

            {/*4th list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profile image" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Anna Omede</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*4th ends starts here */}

            {/*5th list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profile image" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Anna Omede</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*5th ends starts here */}

            {/*6th list starts here */}
            <li className='widgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                alt="profile image" className="widgetSmImg"/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Anna Omede</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            {/*6th ends starts here */}
        </ul>
    </div>
  )
}

export default WidgetSm