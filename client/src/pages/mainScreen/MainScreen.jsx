import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import "./mainScreen.css"
import Topbar from '../../Components/Topbar'

const MainScreen = () => {
  return (
    <div className='outer'>
    <Topbar/>
    <div className='content'> 
        <Sidebar/>
        {/* <MainContent  /> */}
    </div>
    </div>
  )
}

export default MainScreen