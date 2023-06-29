import React from 'react'
import "./mainContent.css"
import { useEffect, useState } from 'react';
const MainContent = (props) => {
 
  
   
  const [data, setData] = useState([]);
  
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
		  setId(data._id);
		  
		  
		  if(!res.status === 200){
			const error = new Error(res.error);
			throw error;
		  }
		} catch (error) {
		  console.log(error);
		  
		}
	
	  }
    const [id, setId] = useState("");
    
  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (userid) => {
    
    const res = await fetch("/allpostings", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       userID: userid
        
      }),
    });

    const data = await res.json();
    setData(data);
      
  };

  return (
    
    <div>
    <div className="card-body">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Area Of Work</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Stipend</th>
            <th>Hours Per Week</th>
            <th>Location Of Work</th>
            <th>Type of Engagement</th>
            <th>Vacancies Available</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr id={user._id}>
                <td>{user.areaofwork}</td>
                <td>{user.date}</td>
                <td>{user.duration}</td>
                <td>{user.stipend}</td>
                <td>{user.hoursweek}</td>
                <td>{user.locationofwork}</td>
                <td>{user.typeofengagement}</td>
                <td>{user.vacancy}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  
  )
}

export default MainContent