import React from 'react';
import ProfileActivate from '../profileActivate/profileActivate';
import './activation.css'
import Navbar from '../../Components/Navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../Components/Topbar';

function Activation() {
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
		<div>
			 <Topbar/>
            
			
			<div className='content'>
			<ProfileActivate/>
			</div>
		</div>
	);
}

export default Activation;