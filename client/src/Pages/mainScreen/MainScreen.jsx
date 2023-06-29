import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import "./mainScreen.css"
import Topbar from '../../Components/Topbar'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar'



const MainScreen = () => {
  const [deactivate , setDeactivate] = useState("");
  const [userData , setUserData] = useState({});

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
		  setUserData(data);
		  console.log(data.deactivate);
		  setDeactivate(data.deactivate);
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
    console.log(deactivate);

 
	return (
		<div className='outer'>
		<Navbar/>
		
		<div className='content'> 
		 <div className='left'>
		 <Sidebar deactivate={deactivate}/>
		 </div>
		  <div className='right'>
		  <MainContent userID = {userData._id}/>
		  </div>
		   
		</div>
		</div>
	  )
  
}

export default MainScreen
