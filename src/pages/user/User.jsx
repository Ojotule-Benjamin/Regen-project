import React from 'react'
import './user.css'
import { Today, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material"
import {Link} from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
                <button className='userAddButton'>Create</button>
            </Link>  
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <img src='https://media-exp1.licdn.com/dms/image/C5603AQHo6TW26TrLYA/profile-displayphoto-shrink_200_200/0/1641590702361?e=1654128000&v=beta&t=zDNNRVNQz2GmeCL903OYxE3uu_z2Oi2cpEKCPgANsUw' 
                    alt='' 
                    className='userShowImg'/>
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>Ojochoko Ochuma</span>
                        <span className='userShowUserTitle'>Product Designer</span>
                    </div>
                </div>
                <div className='userShowBottom'>
                    <span className='userShowTitle'>Account Details</span>
                    <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon'/>
                        <span className='userShowInfoTitle'>chokolicious</span>
                    </div>
                    <div className='userShowInfo'>
                        <Today className='userShowIcon'/>
                        <span className='userShowInfoTitle'>31.01.2008</span>
                    </div>  
                    <span className='userShowTitle'>Contact Details</span>
                    <div className='userShowInfo'>
                        <PhoneAndroid className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+234 7057664401</span>
                    </div>    
                    <div className='userShowInfo'>
                        <MailOutline className='userShowIcon'/>
                        <span className='userShowInfoTitle'>chokolicious@gmail.com</span>
                    </div>  
                    <div className='userShowInfo'>
                        <LocationSearching className='userShowIcon'/>
                        <span className='userShowInfoTitle'>Oslo | Norway</span>
                    </div>  
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>Edit</span>
                <form className='userUpdateForm'>
                    <div className='userUpdateleft'>
                        <div className='userupdateItem'>
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder='chokolicious' 
                            className='userUpdateInput'></input>
                        </div>
                        <div className='userupdateItem'>
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            placeholder='Ojochoko Ochuma' 
                            className='userUpdateInput'></input>
                        </div>
                        <div className='userupdateItem'>
                            <label>Email</label>
                            <input 
                            type="email" 
                            placeholder='chokolicious@gmail.com' 
                            className='userUpdateInput'></input>
                        </div>
                        <div className='userupdateItem'>
                            <label>Phone</label>
                            <input 
                            type="text" 
                            placeholder='+234 7057664401' 
                            className='userUpdateInput'></input>
                        </div>
                        <div className='userupdateItem'>
                            <label>Address</label>
                            <input 
                            type="text" 
                            placeholder='Oslo | Norway' 
                            className='userUpdateInput'></input>
                        </div>
                    </div>
                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img 
                            src='https://media-exp1.licdn.com/dms/image/C5603AQHo6TW26TrLYA/profile-displayphoto-shrink_200_200/0/1641590702361?e=1654128000&v=beta&t=zDNNRVNQz2GmeCL903OYxE3uu_z2Oi2cpEKCPgANsUw' 
                            alt='' 
                            className='userUpdateImg'
                            />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{ display: "none" }} />
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User