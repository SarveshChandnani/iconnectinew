import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import "./mainScreen.css"
import Topbar from '../../Components/Topbar'
import { useNavigate } from 'react-router-dom';



const MainScreen = () => {
  useEffect(()=>{
		callMainPage();
	  },[]);
	
	  const callMainPage = async()=>{
	
		try {
		  const res = await fetch('/mainscreen',{
			method: 'GET',
			headers:{
			  Accept: "application/json",
			  "Content-Type" : "application/json"
			},
			credentials: "include"
		  });
		  const data = await res.json();
		  console.log(data);
		  if(!res.status === 200){
			const error = new Error(res.error);
			throw error;
		  }
		} catch (error) {
		  console.log(error);
		  navigate('/');
		}
	
	  }
	  const navigate = useNavigate();
 

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