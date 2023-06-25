import {MdOutlineNotificationsNone}from 'react-icons/md'
import {withRouter} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'

import './index.css'
import Cookies from 'js-cookie'


const NavBar = (props) => {
 
const logout=()=>{
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
}

  return (
    <>
      <div className="header-container">
        
        <h1 className='heading-1'>Dashboard</h1>
        
        <div className="link-container">
          
           <input type='search' className='search-input' placeholder='search...'/>
          
            <MdOutlineNotificationsNone className='header-icons'/>
            <CgProfile className='header-icons'/>
            <button className='logout-button' onClick={logout}>Logout</button>
          
        </div>
      </div>
      
    </>
  )
}

export default withRouter(NavBar)
